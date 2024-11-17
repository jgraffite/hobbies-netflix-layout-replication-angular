import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightToolbarComponent } from './top-right-toolbar.component';

describe('TopRightToolbarComponent', () => {
  let component: TopRightToolbarComponent;
  let fixture: ComponentFixture<TopRightToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRightToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRightToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
