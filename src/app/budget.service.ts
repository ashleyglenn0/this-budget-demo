import { Injectable } from '@angular/core';
import { Budget } from './budget/budget.model';
import { BudgetItem } from './budget/budgetItem.model';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class BudgetService {
   budgets: Budget[] = [];
  budgetItems: BudgetItem[] = [];
 

  constructor(private firestore: AngularFirestoreCollection,) {
    // const temp;
    // if (temp !== null){
    //   this.budgets = JSON.parse(temp);
    // }else {
    //   localStorage.setItem('budgets', '[]');
    // }

    this.budgets = [
      new Budget('Budget1', 'Home Budget',[
        new BudgetItem('Ameren Electric','888-888-8888','expense', -192.62, '1/11/21', 'none'),
        new BudgetItem('Spire', '888-222-2111', 'expense', -50.62, '1/11/21', 'paid in full'),
          new BudgetItem('AT&T', '888-212-2552', 'expense', -251.02, '1/11/21', 'made payment arrangement'),
          new BudgetItem('Credit Acceptance', '888-382-5311', 'expense', -158.68, '1/11/21', 'car note'),
          new BudgetItem('RayCodes LLC', '888-222-2222', 'income', 500.00, '1/11/21', 'for webpage'),
          new BudgetItem('Best Buy', '888-222-2222', 'income', 1500.00, '1/11/21', 'paycheck')
      ])
    ];
  }


  createBudget(budgetName: string, budgetDescription: string, budgetItems: any = []): number {
    const budget: Budget = new Budget(budgetName, budgetDescription, budgetItems);
    this.budgets.push(budget);
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
    //  this.persistBudgetData();
    return budgetItem;
  }
  getAllBudgets(): Budget[] {
    return this.budgets;
  }
  persistBudgetData(): void {
    localStorage.setItem('budgets', JSON.stringify(this.budgets));
  }
}
