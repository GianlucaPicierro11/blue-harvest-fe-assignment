import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ChartPollComponent, CreatePollComponent, VoteALotComponent, VotePollComponent } from '@core/core.index';

@NgModule({
  declarations: [
    VoteALotComponent,
    CreatePollComponent,
    VotePollComponent,
    ChartPollComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],

})
export class CoreModule { }
