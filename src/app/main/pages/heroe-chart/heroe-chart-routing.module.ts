import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroeChartPage } from './heroe-chart.page';

const routes: Routes = [
  {
    path: '',
    component: HeroeChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroeChartPageRoutingModule {}
