import { BudgetItem } from './budgetItem.model';
import { Budget } from './budget.model';
import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BudgetService {
  budgetItems: BudgetItem[];
  budgets: Budget[];
  constructor() {
    this.budgetItems = [
      new BudgetItem('Spire', '1-888-555-1212', 'Payment', 200.00, '1/4/2021')
    ];

    this.budgets = [
      new Budget('Budget1', 'Home Budget', this.budgetItems)
    ];
  }
 addNewBudgetItem(budget: Budget, budgetItem: BudgetItem): void {
    for (let i = 0; i < this.budgets.length; i++) {
      if (budget.id === this.budgets[i].id) {
        this.budgets[i].budgetItems.push(budgetItem);
      }
    }
    this.budgetItems.push(budgetItem);
 }
  addNewBudget(budget: Budget): void {
    this.budgets.push(budget);
  }
  getBudgets(): Observable<Budget[]> {
    return of(this.budgets);
  }

}

