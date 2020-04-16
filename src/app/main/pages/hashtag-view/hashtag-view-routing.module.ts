import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashtagViewPage } from './hashtag-view.page';

const routes: Routes = [
  {
    path: '',
    component: HashtagViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HashtagViewPageRoutingModule {}
