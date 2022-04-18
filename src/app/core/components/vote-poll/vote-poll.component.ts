import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartModel } from '@core/models/chart.model';

@Component({
  selector: 'app-vote-poll',
  templateUrl: './vote-poll.component.html',
  styleUrls: ['./vote-poll.component.css']
})
export class VotePollComponent implements OnInit {

  @Input("createPollForm") createPollForm: FormGroup | undefined;
  votePollForm: FormGroup;

  answersVoted: Array<ChartModel> = [];

  @Output() answersVotedEvent = new EventEmitter<Array<ChartModel>>();

  constructor(private fb: FormBuilder) {
    this.votePollForm = this.fb.group({
      answer: this.fb.control(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public getAnswers(): FormArray {
    return this.createPollForm?.get('answers') as FormArray;
  }

  vote() {
    let value = this.votePollForm.get('answer')?.value;
    if (value) {
      let foundAnswer = this.answersVoted.find(answer => answer.name === value);
      if (foundAnswer) {
        foundAnswer.value = foundAnswer.value + 1;
        this.answersVoted.splice(this.answersVoted.map(answer => answer.name).indexOf(foundAnswer.name), 1, foundAnswer)
      } else {
        this.answersVoted.push({ name: value, value: 1 })
      }
      this.answersVotedEvent.emit(this.answersVoted);
    }
  }
}
