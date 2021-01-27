import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget.model';
import { BudgetService } from '../../budget.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BudgetItem } from '..//budgetItem.model';

@Component({
  selector: 'app-single-budget',
  templateUrl: './single-budget.component.html',
  styleUrls: ['./single-budget.component.scss']
})

export class SingleBudgetComponent implements OnInit {
  budgetId: any;
  budget: Budget | undefined;
  expense: number = 0;
  income: number = 0;
  total: number = 0;
  expenseList: BudgetItem[] = [];
  incomeList: BudgetItem[] = [];

  constructor(private router: Router, private budgetService: BudgetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.budgetId = +this.route.snapshot.params.id;
    this.budget = this.budgetService.getBudgetById(this.budgetId);
    this.expenseList = this.budget?.budgetItems.filter(item => item.type === 'expense')|| [];
    this.incomeList = this.budget?.budgetItems.filter(item => item.type === 'income')|| [];
    this.expense = this.expenseList.reduce((total, next)=> total+= next.amount, 0) || 0;
    this.income = this.incomeList.reduce((total, next)=> total+= next.amount, 0) || 0;
    this.total = (this.expense + this.income);
  }
  
 
  
}
