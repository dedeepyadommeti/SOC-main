import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixBComponent } from './six-b.component';

describe('SixBComponent', () => {
  let component: SixBComponent;
  let fixture: ComponentFixture<SixBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
