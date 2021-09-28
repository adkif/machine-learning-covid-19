import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { QuestionBase } from "../question-base";
import { QuestionControlService } from "../question-control.service";
import * as tf from "@tensorflow/tfjs";

export interface PayLoad {
  severityMild: number,
  severityModerate: number,
  severityNone: number,
  severitySevere: number
}

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad!: PayLoad ;
  baseModelUrl = "/assets/tfjs_model/jsonModel/model.json";
  model: any;
  max: any;
  severity: string = '';
  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel(this.baseModelUrl);
  }

  async predict(data: any) {
    console.log("Prediction from loaded model:");
    const output = this.model.predict(tf.tensor(data));
    this.max = Math.max(...output.dataSync());
    
    this.payLoad = {
      severityMild: output.dataSync()[0],
      severityModerate: output.dataSync()[1],
      severityNone: output.dataSync()[2],
      severitySevere: output.dataSync()[3],
    };

    let index = output.dataSync().indexOf(this.max)
    switch(index){
      case 0 :
        this.severity = "severityMild";
        break;
        case 1 :
        this.severity = "severityModerate";
        break;
        case 2 :
        this.severity = "severityNone";
        break;
        case 3 :
        this.severity = "severitySevere";
        break;
        default:
          console.log('error');
    }
    console.log(this.payLoad);
  }

  onSubmit() {
    const data: any = [];
    this.questions?.map((question) => {
      console.log(this.form.getRawValue()[question.key]);
      
      return data.push(parseInt(this.form.getRawValue()[question.key]));
    });
    this.predict([data]);
  }
}
