import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterViewPage } from './counter-view.page';

const routes: Routes = [
  {
    path: '',
    component: CounterViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterViewPageRoutingModule {}
