import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveCComponent } from './five-c.component';

describe('FiveCComponent', () => {
  let component: FiveCComponent;
  let fixture: ComponentFixture<FiveCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
