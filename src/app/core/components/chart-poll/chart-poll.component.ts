import { Component, Input } from '@angular/core';
import { ChartModel } from '@core/models/chart.model';

@Component({
  selector: 'app-chart-poll',
  templateUrl: './chart-poll.component.html',
  styleUrls: ['./chart-poll.component.css']
})
export class ChartPollComponent {

  @Input()
  answersVoted!: Array<ChartModel>;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Answers';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  constructor() {
  }

  setAnswersVoted(answersVoted: ChartModel[]) {
    this.answersVoted = [...answersVoted];
  }

}
