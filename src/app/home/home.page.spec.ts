import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 25 elements before scrolling', () => {
    const ionItems = fixture.nativeElement.querySelectorAll('ion-card');

    expect(ionItems.length).toEqual(25);
  });

  it('should have 50 elements after scrolling to the bottom of the screen', fakeAsync(() => {
    const ionItemsBeforeScroll = fixture.nativeElement.querySelectorAll('ion-card');
    expect(ionItemsBeforeScroll.length).toEqual(25);
    const ionInfiniteHTMLElement = fixture.nativeElement.querySelector('ion-infinite-scroll');
    const baseEvent = new CustomEvent("InfiniteScrollCustomEvent");
    const infiniteScrollCustomEvent: InfiniteScrollCustomEvent = {
      ...baseEvent,
      target: ionInfiniteHTMLElement
    }

    component.onIonInfinite(infiniteScrollCustomEvent);

    tick(1000);
    fixture.detectChanges();
    const ionItemsAfterScroll = fixture.nativeElement.querySelectorAll('ion-card');
    expect(ionItemsAfterScroll.length).toEqual(50);
  }));
});
