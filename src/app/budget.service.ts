import { Injectable } from '@angular/core';
import { Budget } from './budget/budget.model';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgets: Budget[];
  constructor() { this.budgets = [
    new Budget('Budget1', 'Home Budget', [])
  ];}
  createBudget(budgetName: string, budgetDescription: string):number{
    const budget: Budget = new Budget(budgetName, budgetDescription, []);
    this.budgets.push(budget);
    return budget.id;
  }
  getBudgets(): Budget[] {
    return this.budgets;
  }
}
