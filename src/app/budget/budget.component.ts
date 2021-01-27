import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Budget } from './budget.model';
import { BudgetItem} from './budgetItem.model';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],

})
export class BudgetComponent implements OnInit {
   budgetId: any;
   budget: any;


  constructor(private router: Router, private budgetService: BudgetService, private route: ActivatedRoute) {   }

  ngOnInit(): void {
   this.budgetId = +this.route.snapshot.params.id;
   this.budget = this.budgetService.getBudgetById(this.budgetId);
   console.log(this.budget);
  }

  onSubmit(form: NgForm): any{
    const date = form.form.value.date;
    const companyName = form.form.value.companyName;
    const companyPhoneNumber = form.form.value.companyPhone;
    const type = form.form.value.type;
    const amount = form.form.value.amount;
    const notes = form.form.value.notes;
    this.budgetService.createBudgetItem(date, companyName, companyPhoneNumber, type, amount, notes, this.budget);
    form.resetForm();
    console.log(form);
  }

}
