import { BudgetItem } from './budgetItem.model';
import { Budget } from './budget.model';

export class BudgetService {
  budgetItems = [
    new BudgetItem('Spire', '1-800-555-1212', 'Payment', 150.00, '1/2/2021')
  ];
  budgetItem = [];
  budget = [
    new Budget('Budget1', 'Home Budget', ['a'])
  ];

  onAddBudgetItem(budgetItem: BudgetItem){
    this.budgetItems.push(budgetItem);
  }
  onAddToBudget(budget: Budget){
    this.budget.push(budget);
  }


}

}
