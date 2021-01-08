import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLettersComponent } from './credit-letters.component';

describe('CreditLettersComponent', () => {
  let component: CreditLettersComponent;
  let fixture: ComponentFixture<CreditLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
