import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCComponent } from './three-c.component';

describe('ThreeCComponent', () => {
  let component: ThreeCComponent;
  let fixture: ComponentFixture<ThreeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
