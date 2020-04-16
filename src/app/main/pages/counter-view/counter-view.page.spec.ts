import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CounterViewPage } from './counter-view.page';

describe('CounterViewPage', () => {
  let component: CounterViewPage;
  let fixture: ComponentFixture<CounterViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
