import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixDComponent } from './six-d.component';

describe('SixDComponent', () => {
  let component: SixDComponent;
  let fixture: ComponentFixture<SixDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
