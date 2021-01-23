import { Component, OnInit } from '@angular/core';
// import { BudgetServiceOriginal } from '../../budget.service.original';
import { Injectable} from '@angular/core';
import { BudgetService } from '../../../budget.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Budget } from '../../budget.model' ;

@Component({
  selector: 'app-budget-title-page',
  templateUrl: './budget-title-page.component.html',
  styleUrls: ['./budget-title-page.component.scss']
})
export class BudgetTitlePageComponent implements OnInit {
  budgets: Budget [] = [];
  budgetId: 0;
  budgetDescription = '';
  budgetName = '';

  constructor(private route: ActivatedRoute, private router: Router, private budgetService: BudgetService) { }

  ngOnInit(): void {
    // this.budgets = this.budgetService.getBudgets(this.budgetId);
    // this.budgetId = this.route.snapshot.params.id;

  }

onSubmit(form: NgForm): any{
  const budgetName = form.form.value.budgetName;
  const budgetDescription = form.form.value.budgetDescription;
  const budgetId = this.budgetService.createBudget(budgetName, budgetDescription);
  this.router.navigate(['/budget', budgetId]);
  console.log(form);

  // pass budgetId to next page and navigate user to that page.
}


}
