import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCComponent } from './four-c.component';

describe('FourCComponent', () => {
  let component: FourCComponent;
  let fixture: ComponentFixture<FourCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
