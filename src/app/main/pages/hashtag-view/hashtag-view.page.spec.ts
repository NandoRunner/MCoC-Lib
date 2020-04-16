import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HashtagViewPage } from './hashtag-view.page';

describe('HashtagViewPage', () => {
  let component: HashtagViewPage;
  let fixture: ComponentFixture<HashtagViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HashtagViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
