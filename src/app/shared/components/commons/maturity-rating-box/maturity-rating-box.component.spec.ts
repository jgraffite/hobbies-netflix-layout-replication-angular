import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturityRatingBoxComponent } from './maturity-rating-box.component';

describe('MaturityRatingBoxComponent', () => {
  let component: MaturityRatingBoxComponent;
  let fixture: ComponentFixture<MaturityRatingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaturityRatingBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaturityRatingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
