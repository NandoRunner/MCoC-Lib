import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroeViewPage } from './heroe-view.page';

const routes: Routes = [
  {
    path: '',
    component: HeroeViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroeViewPageRoutingModule {}
