import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/ability-view/ability-view.module#AbilityViewPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbilitiesRoutingModule { }
