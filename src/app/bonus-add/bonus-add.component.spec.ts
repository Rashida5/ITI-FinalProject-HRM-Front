import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusAddComponent } from './bonus-add.component';

describe('BonusAddComponent', () => {
  let component: BonusAddComponent;
  let fixture: ComponentFixture<BonusAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonusAddComponent]
    });
    fixture = TestBed.createComponent(BonusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
