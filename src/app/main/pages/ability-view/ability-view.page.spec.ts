import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbilityViewPage } from './ability-view.page';

describe('AbilityViewPage', () => {
  let component: AbilityViewPage;
  let fixture: ComponentFixture<AbilityViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbilityViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
