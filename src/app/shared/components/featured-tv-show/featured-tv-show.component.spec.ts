import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTvShowComponent } from './featured-tv-show.component';

describe('FeaturedTvShowComponent', () => {
  let component: FeaturedTvShowComponent;
  let fixture: ComponentFixture<FeaturedTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTvShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
