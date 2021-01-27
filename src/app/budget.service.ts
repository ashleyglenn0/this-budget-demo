import { Injectable } from '@angular/core';
import { Budget } from './budget/budget.model';
import { BudgetItem } from './budget/budgetItem.model';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgets: Budget[] = [];
  budgetItems: BudgetItem[] = [];

  constructor() {
    const temp = localStorage.getItem('budgets');
    

    // const data = JSON.parse(temp || null);
    if (temp !== null){
      this.budgets = JSON.parse(temp);
    } else {
      localStorage.setItem('budgets', '[]');
      this.budgets = [
        new Budget('Budget1', 'Home Budget', [
          new BudgetItem('Ameren Electric', '888-222-2222', 'expense', -192.62, '1/11/21', 'none'),
          new BudgetItem('Best Buy', '888-222-2222', 'income', 1500.00, '1/11/21', 'paycheck')
        ])
      ];
    }

  }



  createBudget(budgetName: string, budgetDescription: string, budgetItems: any = []): number{
    const budget: Budget = new Budget(budgetName, budgetDescription, budgetItems);
    this.budgets.push(budget);
    this.persistBudgetData();
    return budget.id;
  }

  getBudgetById(id: number): Budget|undefined {
    for (let i = 0; i < this.budgets.length; i++) {
      if (this.budgets[i].id === id) {
        return this.budgets[i];
      }
    }
    return undefined;
  }

  // tslint:disable-next-line:max-line-length
  createBudgetItem(date: string, companyName: string, companyPhone: string, type: string, amount: number, notes: string, budget: Budget): any{
    const budgetItem: BudgetItem = new BudgetItem(companyName, companyPhone, type, amount, date, notes);
    budget.budgetItems.push(budgetItem);
    this.persistBudgetData();
    return budgetItem;
  }

  getAllBudgets(): Budget[] {
    return this.budgets;
  }

  persistBudgetData(): void {
    localStorage.setItem('budgets', JSON.stringify(this.budgets));
  }


}
