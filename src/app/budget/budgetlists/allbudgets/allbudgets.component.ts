import { Component, OnInit } from '@angular/core';
import { Budget } from '../../budget.model';
import { BudgetService } from '../../budget.service';
import { BudgetItem } from '../../budgetItem.model';

@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  budgetName = Budget.name;

  allBudgets: Budget[] = [
    new Budget ('Budget1', 'Bills Budget', []),
    new Budget ('Budget2', 'Savings', []),
    new Budget ('Budget3', 'Vacation Budget', [])
  ];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): any {
    this.getBudgets();
  }
  getBudgets(): any {
    this.budgetService.getBudgets().subscribe(budgets => this.Budgets = budgets);
  }

}
