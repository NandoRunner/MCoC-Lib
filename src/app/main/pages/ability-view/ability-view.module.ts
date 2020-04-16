import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AbilityViewPage } from './ability-view.page';

const routes: Routes = [
  {
    path: '',
    component: AbilityViewPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [AbilityViewPage]
})
export class AbilityViewPageModule {}
