import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCComponent } from './one-c.component';

describe('OneCComponent', () => {
  let component: OneCComponent;
  let fixture: ComponentFixture<OneCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
