import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import {FormGroup, NgForm} from '@angular/forms';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  providers: [BudgetService]
})
export class BudgetComponent implements OnInit {

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    console.log(this.budgetService);
  }

  onSubmit(form: NgForm): any{
    console.log(form.form.value.budgetItems);
    const date = form.form.value.date;
    const companyName = form.form.value.companyName;
    const companyPhoneNumber = form.form.value.companyPhone;
    const type = form.form.value.type;
    const amount = form.form.value.amount;
    const budgetItemsId = this.budgetService.createBudgetItem(date, companyName, companyPhoneNumber, type, amount);
  }
}
