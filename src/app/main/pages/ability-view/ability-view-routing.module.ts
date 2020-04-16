import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbilityViewPage } from './ability-view.page';

const routes: Routes = [
  {
    path: '',
    component: AbilityViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbilityViewPageRoutingModule {}
