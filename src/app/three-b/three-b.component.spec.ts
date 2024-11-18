import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBComponent } from './three-b.component';

describe('ThreeBComponent', () => {
  let component: ThreeBComponent;
  let fixture: ComponentFixture<ThreeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
