import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { TagCloudModule } from 'angular-tag-cloud-module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, TranslateModule, TagCloudModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
