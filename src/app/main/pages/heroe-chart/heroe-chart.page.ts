import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';

import { HeroeService } from '../../services/heroe.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseChartPage } from '../base-chart';
import { HeroesCountBy } from '../../models/heroesCountBy.model';

@Component({
  selector: 'app-heroe-chart',
  templateUrl: './heroe-chart.page.html',
  styleUrls: ['../../../app.component.scss'],
})
export class HeroeChartPage extends BaseChartPage {
  user: firebase.User;
  
  constructor(
    private authService: AuthService,
    private overlayService: OverlayService,
    private heroeService: HeroeService
  ) {
    super();
    this.lists$ = new Observable<HeroesCountBy[]>();
    }

  async ngOnInit(): Promise<void> {
    this.authService.authState$.subscribe(user => (this.user = user));
    
    await this.loadData();
    this.changeType("0");
  }

  async loadData() {
    const loading = await this.overlayService.loading();
    this.lists$ = this.heroeService.getCountByClass();
    this.lists$.pipe(take(1)).subscribe(ref => loading.dismiss());
  }

  changeType(param: any) {
    this.showBar = this.showPie = false;

    if (param === "1") {
      this.createPieChart();
    }
    else {
      this.createBarChart();
    }
  }

  private createBarChart() {
    this.myBarChart = this.createChart('bar', this.viewBarChart);
    this.prepareBarChart();
    this.showBar = true;
    this.subTitle = "Bar Chart";
    this.title = "Last 10 weight tests";
  }

  private createPieChart() {
    this.myPieChart = this.createChart('pie', this.viewPieChart);
    this.preparePieChart();
    this.showPie = true;
    this.subTitle = "Pie Chart";
    this.title = "Last 10 weight tests";
  }
}
