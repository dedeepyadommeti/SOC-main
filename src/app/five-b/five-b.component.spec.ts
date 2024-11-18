import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveBComponent } from './five-b.component';

describe('FiveBComponent', () => {
  let component: FiveBComponent;
  let fixture: ComponentFixture<FiveBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
