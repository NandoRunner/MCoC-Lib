import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeroeChartPage } from './heroe-chart.page';

const routes: Routes = [
  {
    path: '',
    component: HeroeChartPage
  }
];

@NgModule({
    imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [HeroeChartPage]
})
export class HeroeChartPageModule {}
