import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { AbilityService, AbilityType } from '../../services/ability.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.page.html',
  styleUrls: ['./counter-view.page.scss']
})
export class CounterViewPage implements OnInit {
  results: Observable<any>;
  loading: HTMLIonLoadingElement;
  user: firebase.User;
  type: AbilityType = AbilityType.Counter;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private service: AbilityService
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.authState$.subscribe(user => (this.user = user));
    await this.loadData();
  }

  async loadData() {
    this.loading = await this.overlayService.loading();
    this.results = this.service.getData(this.type);
    this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
  }

  async ionViewDidLoad() {
    // this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
  }
}
