import { LanguageService } from './main/services/language.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pages: { url: string; direction: string; icon: string; text: string }[];
  user: firebase.User;

  public

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.pages = [
      { url: '/heroes', direction: 'back', icon: 'my-thor-hammer', text: 'Heroes' },
      { url: '/abilities', direction: 'back', icon: 'checkmark', text: 'Abilities' },
      { url: '/counters', direction: 'back', icon: 'checkmark', text: 'Counters' },
      { url: '/hashtags', direction: 'back', icon: 'my-hashtag', text: 'Hashtags' },
      { url: '/heroes/chart', direction: 'back', icon: 'stats-chart', text: 'Heroes Charts' },
    ];

    this.authService.authState$.subscribe(user => {
      this.user = user;

      if (!this.user) {
        this.pages.push({
          url: '/login',
          direction: 'back',
          icon: 'power',
          text: 'Login'
        });
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.languageService.setInitialAppLanguage();
  }
}
