import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget.model';
import { BudgetService } from '../../budget.service';

@Component({
  selector: 'app-single-budget',
  templateUrl: './single-budget.component.html',
  styleUrls: ['./single-budget.component.scss'],
  providers: [BudgetService]
})
export class SingleBudgetComponent implements OnInit {
  budgetName = Budget.name;

  constructor() { }

ngOnInit(): void { }
}
