import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenCComponent } from './ten-c.component';

describe('TenCComponent', () => {
  let component: TenCComponent;
  let fixture: ComponentFixture<TenCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
