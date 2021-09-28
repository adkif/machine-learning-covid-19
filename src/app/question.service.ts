import { Injectable } from '@angular/core';

import { DropdownQuestion } from './dropdown-question';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './textbox-question';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'Tiredeness',
        label: 'Are you tired?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 2
      }),
      new DropdownQuestion({
        key: 'Fever',
        label: 'Have you a Fever?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 1
      }),
      new DropdownQuestion({
        key: 'Dry-Cough',
        label: 'Have you a Dry-Cough?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'Difficulty-in-Breathing',
        label: 'Have you a Difficulty-in-Breathing?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 4
      }),
      new DropdownQuestion({
        key: 'Sore-Throat',
        label: 'Have you a Sore-Throat?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 5
      }),
      new DropdownQuestion({
        key: 'None_Sympton',
        label: 'Have you a None_Sympton?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 6
      }),
      new DropdownQuestion({
        key: 'Pains',
        label: 'Have you a Pains?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 7
      }),
      new DropdownQuestion({
        key: 'Nasal-Congestion',
        label: 'Have you a Nasal-Congestion?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 8
      }),
      new DropdownQuestion({
        key: 'Runny-Nose',
        label: 'have you a Runny-Nose?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 9
      }),
      new DropdownQuestion({
        key: 'Diarrhea',
        label: 'Have you a Diarrhea?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 10
      }),
      new DropdownQuestion({
        key: 'None_Experiencing',
        label: 'Are you None_Experiencing?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 11
      }),
      new DropdownQuestion({
        key: 'Age_0-9',
        label: 'Have you an Age_0-9?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 12
      }),
      new DropdownQuestion({
        key: 'Age_10-19',
        label: 'Have you an Age_10-19?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 13
      }),
      new DropdownQuestion({
        key: 'Age_20-24',
        label: 'Have you an Age_20-24?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 14
      }),
      new DropdownQuestion({
        key: 'Age_25-59',
        label: 'have you an Age_25-59?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 15
      }),
      new DropdownQuestion({
        key: 'Contact_Yes',
        label: 'Have you a Contact_Yes?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 22
      }),
      new DropdownQuestion({
        key: 'Age_60+',
        label: 'have you an Age_60+?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 16
      }),
      new DropdownQuestion({
        key: 'Gender_Female',
        label: 'Have you a Gender_Female?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 17
      }),
      new DropdownQuestion({
        key: 'Gender_Male',
        label: 'have you a Gender_Male?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 18
      }),
      new DropdownQuestion({
        key: 'Gender_Transgender',
        label: 'Have you a Gender_Transgender?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 19
      }),
      new DropdownQuestion({
        key: 'Contact_Dont-Know',
        label: 'have you a Contact_Dont-Know?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 20
      }),
      new DropdownQuestion({
        key: 'Contact_No',
        label: 'Have you a Contact_No?',
        options: [
          {key: '1',  value: 'Yes'},
          {key: '0',  value: 'No'},
        ],
        order: 21
      }),

    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}