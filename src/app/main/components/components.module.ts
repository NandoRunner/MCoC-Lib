import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { HeroesComponent } from './heroes/heroes.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { CountersComponent } from './counters/counters.component';
import { AbilitiesComponent } from './abilities/abilities.component';

@NgModule({
  declarations: [HeroesComponent, HashtagsComponent, CountersComponent, AbilitiesComponent],
  imports: [SharedModule],
  exports: [HeroesComponent, HashtagsComponent, CountersComponent, AbilitiesComponent]
})
export class ComponentsModule {}
