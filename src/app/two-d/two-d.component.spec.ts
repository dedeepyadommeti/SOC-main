import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDComponent } from './two-d.component';

describe('TwoDComponent', () => {
  let component: TwoDComponent;
  let fixture: ComponentFixture<TwoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
