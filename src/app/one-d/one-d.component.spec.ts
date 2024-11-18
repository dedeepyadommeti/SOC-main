import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDComponent } from './one-d.component';

describe('OneDComponent', () => {
  let component: OneDComponent;
  let fixture: ComponentFixture<OneDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
