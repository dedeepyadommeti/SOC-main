import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineAComponent } from './nine-a.component';

describe('NineAComponent', () => {
  let component: NineAComponent;
  let fixture: ComponentFixture<NineAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NineAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
