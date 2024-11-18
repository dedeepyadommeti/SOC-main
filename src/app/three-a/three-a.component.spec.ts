import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeAComponent } from './three-a.component';

describe('ThreeAComponent', () => {
  let component: ThreeAComponent;
  let fixture: ComponentFixture<ThreeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
