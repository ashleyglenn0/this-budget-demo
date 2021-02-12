import { BudgetItem } from './budgetItem.model';
import { BudgetTitlePageComponent } from './budgetTitle/budget-title-page/budget-title-page.component';

export class Budget {
  public id: number;
  public name: string;
  public description: string;
  public budgetItems: BudgetItem[];


  constructor(name: string, description: string, budgetItems: BudgetItem[]) {
    this.id = Date.now();
    this.name = name;
    this.description = description;
    this.budgetItems = budgetItems;
  }

  toJSON() {
    let json = {
      name: this.name,
      description: this.description,
      budgetItems: [] as any
    }
    this.budgetItems.forEach(budgetItem => {
      json.budgetItems.push({
          companyName: budgetItem.companyName,
          companyPhone: budgetItem.companyPhone,
          type: budgetItem.type,
          amount: budgetItem.amount,
          date: budgetItem.date,
          notes: budgetItem.notes
      })
    })
    return json;
  }
}
