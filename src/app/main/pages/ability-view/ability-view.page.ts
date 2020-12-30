import { Component, EventEmitter, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { AbilityService } from '../../services/ability.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AbilityType } from '../../models/abilityType.enum';
import { GlobalService } from '../../../core/services/global.service';

@Component({
  selector: 'app-ability-view',
  templateUrl: './ability-view.page.html',
  styleUrls: ['./ability-view.page.scss']
})
export class AbilityViewPage implements OnInit {
  results: Observable<any>;
  loading: HTMLIonLoadingElement;
  user: firebase.User;
  searchTerm: string;
  type: AbilityType = AbilityType.Regular;

  finishedLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private service: AbilityService
  ) {
    GlobalService.getInstance().data = [];
    GlobalService.getInstance()
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
    if (GlobalService.getInstance().isDebug)  console.log('-> selectedValue: ', param);
    this.searchTerm = param;
    await this.loadData();
  }

  ionViewDidLoad() {
    // this.results.pipe(take(1)).subscribe(ref => this.loading.dismiss());
    // this.finishedLoading.emit(true);
    // console.log('FIM - Ability 2');
  }

  ngAfterViewChecked() {
    // you could also do this after a service call of some sort
      //  this.finishedLoading.emit(true);
      //  console.log('FIM - Ability');
  }
}
