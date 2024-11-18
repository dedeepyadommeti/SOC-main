import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenBComponent } from './seven-b.component';

describe('SevenBComponent', () => {
  let component: SevenBComponent;
  let fixture: ComponentFixture<SevenBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
