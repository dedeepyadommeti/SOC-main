import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightAComponent } from './eight-a.component';

describe('EightAComponent', () => {
  let component: EightAComponent;
  let fixture: ComponentFixture<EightAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
