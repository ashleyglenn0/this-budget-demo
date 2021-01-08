import { BudgetItem } from './budgetItem.model';
import { Budget } from './budget.model';

export class BudgetService {
  constructor(budget: Budget) {
  }

  onAddBudgetItem(budgetItem: BudgetItem){
    this.budgetItems.push(budgetItem);
  }
  onAddToBudget(budget: Budget){
    this.budget.push(budget);
  }

}
}
