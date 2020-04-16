import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroeChartPage } from './heroe-chart.page';

describe('HeroeChartPage', () => {
  let component: HeroeChartPage;
  let fixture: ComponentFixture<HeroeChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
