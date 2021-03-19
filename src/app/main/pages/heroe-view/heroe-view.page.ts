import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { OverlayService } from 'src/app/core/services/overlay.service';

import { HeroeService } from '../../services/heroe.service';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroe.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { HeroeClassType } from '../../models/heroeClassType.enum';
import { GlobalService } from '../../../core/services/global.service';

@Component({
  selector: 'app-heroe-view',
  templateUrl: './heroe-view.page.html',
  styleUrls: ['./heroe-view.page.scss'],
})
export class HeroeViewPage implements OnInit {
  results: Heroe[] = [];
  resultsFilter: Heroe[] = [];

  searchTerm: string;
  type: HeroeClassType = HeroeClassType.ALL;
  loading: HTMLIonLoadingElement;
  user: firebase.User;

  id: string;
  name: string;
  page: string;
  filterType: string;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private heroeService: HeroeService
  ) {}

  async ngOnInit(): Promise<void> {
    this.searchTerm = '';
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.filterType = this.activatedRoute.snapshot.paramMap.get('type');
    this.authService.authState$.subscribe((user) => (this.user = user));
    await this.loadData();
  }

  async loadData() {
    this.loading = await this.overlayService.loading();
    if (this.filterType === null) {
      this.results = await this.heroeService
        .getData(this.searchTerm, this.type)
        .toPromise();
      this.page = '';
    } else if (this.filterType === '3') {
      this.results = await this.heroeService.getByHashtag(this.id).toPromise();
      this.page = 'hashtags';
    } else if (this.filterType === '2') {
      this.results = await this.heroeService.getByAbility(this.id).toPromise();
      this.page = 'counters';
    } else {
      this.results = await this.heroeService.getByAbility(this.id).toPromise();
      this.page = 'abilities';
    }
    if (this.results) {
      this.setupFilter(this.results);
      this.loading.dismiss();
    }
    // this.results..pipe(take(1)).subscribe((ref) => this.loading.dismiss());
  }

  protected setupFilter(results: Heroe[]) {
    this.resultsFilter = [];
    results.forEach((c) => {
      this.resultsFilter.push(c);
    });
  }

  pesquisar(pesquisa: string) {
    this.resultsFilter = [];
    if (!pesquisa) {
      this.resultsFilter = this.results;
    } else {
      pesquisa = pesquisa
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      this.results.forEach((res) => {
        if (this.normalizarNome(res, pesquisa)) {
          this.resultsFilter.push(res);
        }
      });
    }
    this.setupFilter(this.resultsFilter);
  }

  protected normalizarNome(res: Heroe, pesquisa) {
    const nome = res.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return nome.indexOf(pesquisa) > -1;
  }

  async changeType(param: any) {
    this.type = param;
    this.searchTerm = '';
    await this.loadData();
  }

  async changeSearchTerm(param: any) {
    if (param.length > 0 && param.length < 3) {
      return;
    }
    if (GlobalService.getInstance().isDebug) {
      console.log('-> selectedValue: ', param);
    }
    this.type = HeroeClassType.ALL;
    this.searchTerm = param;
    await this.loadData();
  }

  async onDone(o: Heroe) {
    const toUpdate = { ...o, isactive: !o.isactive };
    // todo: call UserHeroe
    console.log(toUpdate);
    await this.heroeService.update(toUpdate);
    await this.overlayService.toast({
      message: `Heroe "${o.name}" ${
        toUpdate.isactive ? ' added to' : ' removed from'
      } My Heroes!`,
    });
  }
}
