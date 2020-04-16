import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroeViewPage } from './heroe-view.page';

describe('HeroeViewPage', () => {
  let component: HeroeViewPage;
  let fixture: ComponentFixture<HeroeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
