import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeroeViewPage } from './heroe-view.page';

const routes: Routes = [
  {
    path: '',
    component: HeroeViewPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [HeroeViewPage]
})
export class HeroeViewPageModule {}
