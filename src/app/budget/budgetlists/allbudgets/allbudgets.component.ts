import { Component, OnInit } from '@angular/core';
import { Budget } from '../../budget.model';
import { BudgetService } from '../../budget.service';

@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getBudgets();
  }
  getBudgets(): void{
    this.budgetService.getBudgets().subscribe(budgets => this.budgets = budgets);
  }

}
