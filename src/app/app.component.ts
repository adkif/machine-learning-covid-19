import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h2>Take COVID 19 Survey</h2>
      <app-dynamic-form [questions]="questions | async"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  
  questions: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}