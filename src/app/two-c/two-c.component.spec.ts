import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCComponent } from './two-c.component';

describe('TwoCComponent', () => {
  let component: TwoCComponent;
  let fixture: ComponentFixture<TwoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
