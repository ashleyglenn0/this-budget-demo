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
    new Budget('Budget1', 'Home Budget', this.budgetItems)
  ];
                  this.budgetItems = [
    new BudgetItem('Ameren Electric', '888-222-2222', 'payment', 200.00, '1/11/21')
  ];
                }

  createBudgetId(budgetId: number): number{
    budgetId++;
    return budgetId;
  }

  createBudget(budgetName: string, budgetDescription: string, this.budgetItems): number{
    const budget: Budget = new Budget(budgetName, budgetDescription, []);
    this.createBudgetId(budgetId);
    this.budgets.push(budget);
    return budget.id;
  }

  // getBudgetItemById(id: number): BudgetItem {
  //   return this.budgetItems[id];
  // }

  createBudgetItem(date: string, companyName: string, companyPhoneNumber: string, type: string, amount: number): any{
    const budgetItem: BudgetItem = new BudgetItem(companyName, companyPhoneNumber, type, amount, date);
    this.budgetItems.push(budgetItem);
    return budgetItem;
  }

  getFullBudgets(): Budget[] {
    const fullBudget = new Budget('', '', this.budgetItems);
    this.fullBudget.push(this.fullBudget);
    return this.fullBudget;
  }
  // getAllBudgets(){
  //   return this.allBudgets;
  // }
}
