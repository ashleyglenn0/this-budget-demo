import { Component, OnInit } from '@angular/core';
import { Budget } from '../../budget.model';
import { BudgetService } from '../../../budget.service';


@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  budgetName = Budget.name;

  allBudgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): any {
     this.allBudgets = this.budgetService.getBudgets();
    // this.getBudgets();
  }
   // getBudgets(): any {
   //   this.budgetService.getBudgets().subscribe(budgets => this.Budgets = budgets);
   // }

}
