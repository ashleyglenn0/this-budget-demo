import { Component, OnInit, EventEmitter } from '@angular/core';
import { BudgetService} from './budget.service';
import { BudgetItem } from './budgetItem.model';
import { Budget } from './budget.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [BudgetService]
})
export class BudgetComponent implements OnInit {
  addToBudget = new EventEmitter<{budget: Budget}>();
  addBudgetItem = new EventEmitter<{budget: Budget, budgetItem: BudgetItem}>();
  budgetItems: BudgetItem[] = [
    new BudgetItem('Ameren', '888-222-1111', 'Payment', 200.00, '1-4-2021')
  ];
  budgets: Budget[] = [
    new Budget ('Budget1', 'Bills Budget', this.budgetItems)
  ];
  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {

  }
  addNewBudgetItem(): void{
    this.addBudgetItem.emit();
  }

  addNewBudget(): void{
    this.addToBudget.emit();
  }


}
