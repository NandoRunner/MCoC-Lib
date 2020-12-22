import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { HeroesComponent } from './heroes/heroes.component';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { CountersComponent } from './counters/counters.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { TagcloudComponent } from './tagcloud/tagcloud.component';

@NgModule({
  declarations: [HeroesComponent, HashtagsComponent, CountersComponent, AbilitiesComponent, TagcloudComponent],
  imports: [SharedModule, TagCloudModule],
  exports: [HeroesComponent, HashtagsComponent, CountersComponent, AbilitiesComponent, TagcloudComponent]
})
export class ComponentsModule {}
