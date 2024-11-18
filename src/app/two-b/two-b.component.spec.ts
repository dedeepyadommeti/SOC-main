import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBComponent } from './two-b.component';

describe('TwoBComponent', () => {
  let component: TwoBComponent;
  let fixture: ComponentFixture<TwoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
