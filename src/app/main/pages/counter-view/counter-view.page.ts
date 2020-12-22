import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { AbilityService } from '../../services/ability.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AbilityType } from '../../models/abilityType.enum';
import { GlobalService } from '../../../core/services/global.service';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.page.html',
  styleUrls: ['./counter-view.page.scss']
})
export class CounterViewPage implements OnInit {
  results: Observable<any>;
  loading: HTMLIonLoadingElement;
  user: firebase.User;
  searchTerm: string;
  type: AbilityType = AbilityType.Counter;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private service: AbilityService,
    private global: GlobalService
  ) {
    global.data = [];
    global.map.clear();
  }

  async ngOnInit(): Promise<void> {
    this.searchTerm = '';
    this.authService.authState$.subscribe(user => (this.user = user));
    await this.loadData();
  }

  async loadData() {
    this.loading = await this.overlayService.loading();
    this.results = this.service.getData(this.searchTerm, this.type);
    this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
  }

  async changeSearchTerm(param: any) {
    if (param.length > 0 && param.length < 3) {
      return;
    }
    if (this.global.isDebug)  console.log('-> selectedValue: ', param);
    this.searchTerm = param;
    await this.loadData();
  }

  async ionViewDidLoad() {
    // this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
  }
}
