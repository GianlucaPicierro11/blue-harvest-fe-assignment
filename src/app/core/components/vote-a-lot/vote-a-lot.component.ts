import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreatePollComponent } from '@core/core.index';
import { ChartModel } from '@core/models/chart.model';
import { ChartPollComponent } from '../chart-poll/chart-poll.component';

@Component({
  selector: 'app-vote-a-lot',
  templateUrl: './vote-a-lot.component.html',
  styleUrls: ['./vote-a-lot.component.css']
})
export class VoteALotComponent implements OnInit {

  @ViewChild("createPoll", { static: true }) createPollComponent: CreatePollComponent | undefined;

  @ViewChild("chartPoll", { static: false }) chartPollComponent: ChartPollComponent | undefined;

  createPollForm: FormGroup | undefined;
  answersVoted!: Array<ChartModel>;

  constructor() {
  }

  ngOnInit(): void {
    this.createPollForm = this.createPollComponent?.createPollForm
  }

  answersVotedChange(answersVoted: Array<ChartModel>) {
    this.answersVoted = answersVoted;
    this.chartPollComponent?.setAnswersVoted(answersVoted);
  }


}
