import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourBComponent } from './four-b.component';

describe('FourBComponent', () => {
  let component: FourBComponent;
  let fixture: ComponentFixture<FourBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
