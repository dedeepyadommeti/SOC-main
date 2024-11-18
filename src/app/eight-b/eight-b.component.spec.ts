import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightBComponent } from './eight-b.component';

describe('EightBComponent', () => {
  let component: EightBComponent;
  let fixture: ComponentFixture<EightBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
