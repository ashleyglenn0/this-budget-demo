import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTitlePageComponent } from './budget-title-page.component';

describe('BudgetTitlePageComponent', () => {
  let component: BudgetTitlePageComponent;
  let fixture: ComponentFixture<BudgetTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTitlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
