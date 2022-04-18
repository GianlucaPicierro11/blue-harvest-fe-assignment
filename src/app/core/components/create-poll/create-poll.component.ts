import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {

  createPollForm: FormGroup;
  maxNumAnswers: number = 10;
  @Output() resetAllEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.createPollForm = this.fb.group({
      pollQuestion: this.fb.control('', [Validators.required, Validators.maxLength(80)]),
      answers: this.fb.array([
        this.fb.control('', [Validators.required, Validators.maxLength(80)]),
        this.fb.control('', [Validators.required, Validators.maxLength(80)])
      ])
    });
  }

  getAnswers(): FormArray {
    return this.createPollForm.get('answers') as FormArray;
  }

  areFirstTwoAnswers(i: number): boolean {
    return i == 0 || i == 1;
  }

  delete(index: number) {
    const arrayForm = this.getAnswers();
    arrayForm.removeAt(index);
  }

  addItem() {
    if (this.getAnswers().length < this.maxNumAnswers) {
      this.getAnswers().push(this.fb.control('', [Validators.required, Validators.maxLength(80)]));
    }
  }

  resetAll() {
    this.createPollForm.reset();
    this.resetAllEvent.emit(true);
  }
}
