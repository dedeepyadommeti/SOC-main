import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourAComponent } from './four-a.component';

describe('FourAComponent', () => {
  let component: FourAComponent;
  let fixture: ComponentFixture<FourAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
