import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDComponent } from './ten-d.component';

describe('TenDComponent', () => {
  let component: TenDComponent;
  let fixture: ComponentFixture<TenDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
