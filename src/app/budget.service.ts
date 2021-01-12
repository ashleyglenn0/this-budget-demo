import { Injectable } from '@angular/core';
import { Budget } from './budget/budget.model';
import { BudgetItem } from './budget/budgetItem.model';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgets: Budget[];
  budgetItems: BudgetItem[];
  constructor() { this.budgets = [
    new Budget('Budget1', 'Home Budget', [])
  ];
                  this.budgetItems = [
    new BudgetItem('Ameren Electric', '888-222-2222', 'payment', 200.00, '1/11/21')
  ]; }
  createBudget(budgetName: string, budgetDescription: string): number{
    const budget: Budget = new Budget(budgetName, budgetDescription, []);
    this.budgets.push(budget);
    return budget.id;
  }
  createBudgetItem(date: string, companyName: string, companyPhoneNumber: string, type: string, amount: number): any{
    const budgetItem: BudgetItem = new BudgetItem(companyName, companyPhoneNumber, type, amount, date);
    this.budgetItems.push(budgetItem);
    return budgetItem.id;
  }
  getBudgets(): Budget[] {
    return this.budgets;
  }
}
