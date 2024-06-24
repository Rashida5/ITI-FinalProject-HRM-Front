import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionUpdateComponent } from './deduction-update.component';

describe('DeductionUpdateComponent', () => {
  let component: DeductionUpdateComponent;
  let fixture: ComponentFixture<DeductionUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeductionUpdateComponent]
    });
    fixture = TestBed.createComponent(DeductionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
