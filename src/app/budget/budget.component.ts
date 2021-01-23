import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Budget } from './budget.model';
import { BudgetItem} from './budgetItem.model';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [BudgetService]
})
export class BudgetComponent implements OnInit {
   budgetItems: (string | number)[] = ['Spire', '212-222-2212', 'Expense', 205.00, '1/13/21'];




  constructor(private router: Router, private budgetService: BudgetService) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm): any{
    console.log(form);
    const date = form.form.value.date;
    const companyName = form.form.value.companyName;
    const companyPhoneNumber = form.form.value.companyPhone;
    const type = form.form.value.type;
    const amount = form.form.value.amount;
    this.budgetService.createBudgetItem(date, companyName, companyPhoneNumber, type, amount);
    this.budgetService.getFullBudgets();
  }

}
