import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveAComponent } from './five-a.component';

describe('FiveAComponent', () => {
  let component: FiveAComponent;
  let fixture: ComponentFixture<FiveAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
