import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/heroe-view/heroe-view.module#HeroeViewPageModule'
      },
      {
        path: 'chart',
        loadChildren: './pages/heroe-chart/heroe-chart.module#HeroeChartPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
