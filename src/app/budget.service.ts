import { Injectable } from '@angular/core';
import { Budget } from './budget/budget.model';
import { BudgetItem } from './budget/budgetItem.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgets: Budget[] = [];
  budgetItems: BudgetItem[] = [];


  constructor(private db: AngularFirestore) {
    const temp = localStorage.getItem('budgets');

    if (temp !== null) {
      this.budgets = JSON.parse(temp)
    } else {
      localStorage.setItem('budgets', '[]');
      
      this.budgets = [];

    }


  }


  createBudget(budgetName: string, budgetDescription: string, budgetItems: any = []): number {
    const budget: Budget = new Budget(budgetName, budgetDescription, budgetItems);
    this.budgets.push(budget);
    this.persistBudgetData();
    return budget.id;
  }

  getBudgetById(id: number): Budget | undefined {
    for (let i = 0; i < this.budgets.length; i++) {
      if (this.budgets[i].id === id) {
        return this.budgets[i];
      }
    }
    return undefined;
  }

  createBudgetItem(date: string, companyName: string, companyPhone: string, type: string, amount: number, notes: string, budget: Budget): any {
    const budgetItem: BudgetItem = new BudgetItem(companyName, companyPhone, type, amount, date, notes);
    budget.budgetItems.push(budgetItem);
    this.persistBudgetData();
    return budgetItem;
  }
  getAllBudgets(): Budget[] {
    return this.budgets;
  }
  getAllBudgetsForUser(uid: string) {
    return this.db.collection(`Users/${uid}/budgets`).get()

  }

  persistBudgetData(): void {
    localStorage.setItem('budgets', JSON.stringify(this.budgets));
  }

  saveBudget(budget: Budget, uid: string) {
    return this.db.collection(`Users/${uid}/budgets`).add(budget.toJSON())

  }
}
