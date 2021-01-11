import { Component, OnInit } from '@angular/core';
// import { BudgetServiceOriginal } from '../../budget.service.original';
import { Injectable} from '@angular/core';
import { BudgetService } from '../../../budget.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-budget-title-page',
  templateUrl: './budget-title-page.component.html',
  styleUrls: ['./budget-title-page.component.scss']
})
export class BudgetTitlePageComponent implements OnInit {
  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    console.log(this.budgetService);
  }

onSubmit(form: NgForm){
 console.log(form.form.value.budgetName);
 const budgetName = form.form.value.budgetName;
 const budgetDescription = form.form.value.budgetDescription;
 const budgetId = this.budgetService.createBudget(budgetName, budgetDescription);
 // pass budgetId to next page and navigate user to that page.
}

}
