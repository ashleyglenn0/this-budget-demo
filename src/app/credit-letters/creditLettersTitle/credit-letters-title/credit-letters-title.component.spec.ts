import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLettersTitleComponent } from './credit-letters-title.component';

describe('CreditLettersTitleComponent', () => {
  let component: CreditLettersTitleComponent;
  let fixture: ComponentFixture<CreditLettersTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLettersTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditLettersTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
