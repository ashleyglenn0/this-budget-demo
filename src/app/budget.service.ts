import { Injectable } from '@angular/core';
import { Budget } from './budget/budget.model';
import { BudgetItem } from './budget/budgetItem.model';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgets: Budget[];
  budgetItems: BudgetItem[];
  fullBudget: Budget[];
  constructor() { this.budgets = [
    new Budget('Budget1', 'Home Budget', [])
  ];
                  this.budgetItems = [
    new BudgetItem('Ameren Electric', '888-222-2222', 'payment', 200.00, '1/11/21')
  ];
                  this.fullBudget = [
    new Budget('Budget1', 'New Budget', this.budgetItems)
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

  getFullBudget(budgetName: string, budgetDescription: string, budgetItems: BudgetItem[]): any{
    budgetItems = this.budgetItems;
    const completedBudget: Budget = new Budget(budgetName, budgetDescription, this.budgetItems);
    this.fullBudget.push(completedBudget);
    return completedBudget;
}
  getBudgets(): Budget[] {
    return this.fullBudget;
  }
}
