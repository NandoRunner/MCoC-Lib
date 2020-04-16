  import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'heroes', loadChildren: './main/heroes.module#HeroesModule' },
  { path: 'heroes/chart', loadChildren: './main/heroes.module#HeroesModule' },
  { path: 'heroes/:id/:name/:type', loadChildren: './main/heroes.module#HeroesModule' },
  { path: 'abilities', loadChildren: './main/abilities.module#AbilitiesModule' },
  { path: 'counters', loadChildren: './main/counters.module#CountersModule' },
  { path: 'hashtags', loadChildren: './main/hashtags.module#HashtagsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
