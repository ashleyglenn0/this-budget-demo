import { BudgetItem } from './budgetItem.model';

export class Budget {
    public id: number;
    public name: string;
    public description: string;
    public budgetItems: BudgetItem[];


  constructor(name: string, description: string, budgetItems: BudgetItem[]){
      this.id = Date.now();
      this.name = name;
      this.description = description;
      this.budgetItems = budgetItems;
    }
}
