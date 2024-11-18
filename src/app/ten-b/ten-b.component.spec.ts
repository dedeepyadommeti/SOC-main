import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenBComponent } from './ten-b.component';

describe('TenBComponent', () => {
  let component: TenBComponent;
  let fixture: ComponentFixture<TenBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
