import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightCComponent } from './eight-c.component';

describe('EightCComponent', () => {
  let component: EightCComponent;
  let fixture: ComponentFixture<EightCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
