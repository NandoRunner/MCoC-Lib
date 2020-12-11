import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';

import { HashtagService } from '../../services/hashtag.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-hashtag-view',
  templateUrl: './hashtag-view.page.html',
  styleUrls: ['./hashtag-view.page.scss']
})
export class HashtagViewPage implements OnInit {
  results: Observable<any>;
  loading: HTMLIonLoadingElement;
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private hashtagService: HashtagService
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.authState$.subscribe(user => (this.user = user));
    await this.loadData();
  }

  async loadData() {
    this.loading = await this.overlayService.loading();
    //this.results = this.hashtagService.getAll();
    this.results = this.hashtagService.getCountByHeroe();
    //todo: count
    this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
  }

  async ionViewDidLoad() {
    console.log("tudo");
    // this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
  }
}
