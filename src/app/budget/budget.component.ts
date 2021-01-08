import { Component, OnInit } from '@angular/core';
import { BudgetService} from './budget.service';
import { BudgetItem } from './budgetItem.model';
import { Budget } from './budget.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [BudgetService]
})
export class BudgetComponent implements OnInit {
  budgetItems: BudgetItem = [
    new BudgetItem('Ameren', '888-222-1111', 'Payment', 200.00, '1-4-2021')
  ];
  budgets: Budget = [
    new Budget ('Budget1', 'Bills Budget', ['are'])
  ];
  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {}
}
