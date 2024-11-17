import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowPreviewComponent } from './tv-show-preview.component';

describe('TvShowPreviewComponent', () => {
  let component: TvShowPreviewComponent;
  let fixture: ComponentFixture<TvShowPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvShowPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
