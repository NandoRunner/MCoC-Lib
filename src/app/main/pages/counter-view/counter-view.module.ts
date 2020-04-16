import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CounterViewPage } from './counter-view.page';

const routes: Routes = [
  {
    path: '',
    component: CounterViewPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [CounterViewPage]
})
export class CounterViewPageModule {}
