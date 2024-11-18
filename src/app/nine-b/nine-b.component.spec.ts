import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineBComponent } from './nine-b.component';

describe('NineBComponent', () => {
  let component: NineBComponent;
  let fixture: ComponentFixture<NineBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NineBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
