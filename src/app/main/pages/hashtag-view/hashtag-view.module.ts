import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HashtagViewPage } from './hashtag-view.page';

const routes: Routes = [
  {
    path: '',
    component: HashtagViewPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [HashtagViewPage]
})
export class HashtagViewPageModule {}
