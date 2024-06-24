import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionListComponent } from './deduction-list.component';

describe('DeductionListComponent', () => {
  let component: DeductionListComponent;
  let fixture: ComponentFixture<DeductionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeductionListComponent]
    });
    fixture = TestBed.createComponent(DeductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});