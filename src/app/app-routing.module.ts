import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from '@shared/enumerations/routes.enum';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: `${RoutesEnum.CORE}/${RoutesEnum.VOTE_A_LOT}`, pathMatch: 'full' },
      { path: RoutesEnum.CORE, redirectTo: `${RoutesEnum.CORE}/${RoutesEnum.VOTE_A_LOT}`, pathMatch: 'full' },
      {
        path: RoutesEnum.CORE,
        loadChildren: () => import('@core/core.module').then(m => m.CoreModule)
      },
    ]
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
