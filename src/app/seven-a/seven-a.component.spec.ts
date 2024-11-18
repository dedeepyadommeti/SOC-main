import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenAComponent } from './seven-a.component';

describe('SevenAComponent', () => {
  let component: SevenAComponent;
  let fixture: ComponentFixture<SevenAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
