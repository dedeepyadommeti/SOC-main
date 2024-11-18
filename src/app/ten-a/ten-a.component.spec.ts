import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenAComponent } from './ten-a.component';

describe('TenAComponent', () => {
  let component: TenAComponent;
  let fixture: ComponentFixture<TenAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
