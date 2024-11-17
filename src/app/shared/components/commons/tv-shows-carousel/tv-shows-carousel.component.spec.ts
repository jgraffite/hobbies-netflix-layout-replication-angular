import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsCarouselComponent } from './tv-shows-carousel.component';

describe('TvShowsCarouselComponent', () => {
  let component: TvShowsCarouselComponent;
  let fixture: ComponentFixture<TvShowsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowsCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvShowsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
