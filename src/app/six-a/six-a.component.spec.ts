import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixAComponent } from './six-a.component';

describe('SixAComponent', () => {
  let component: SixAComponent;
  let fixture: ComponentFixture<SixAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
