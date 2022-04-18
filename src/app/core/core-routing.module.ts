import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@shared/enumerations/routes.enum';
import { VoteALotComponent } from './components/vote-a-lot/vote-a-lot.component';

const coreRoutes: Routes = [
  {
    path: RoutesEnum.VOTE_A_LOT, pathMatch: 'full', component: VoteALotComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
