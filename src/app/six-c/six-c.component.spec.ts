import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCComponent } from './six-c.component';

describe('SixCComponent', () => {
  let component: SixCComponent;
  let fixture: ComponentFixture<SixCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
