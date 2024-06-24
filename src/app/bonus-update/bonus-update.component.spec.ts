import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusUpdateComponent } from './bonus-update.component';

describe('BonusUpdateComponent', () => {
  let component: BonusUpdateComponent;
  let fixture: ComponentFixture<BonusUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonusUpdateComponent]
    });
    fixture = TestBed.createComponent(BonusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
