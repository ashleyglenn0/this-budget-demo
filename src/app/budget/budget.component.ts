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
   budgetId: string;


  constructor(private router: Router, private budgetService: BudgetService) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm): any{
    console.log(form.form.value.budgetItems);
    const date = form.form.value.date;
    const companyName = form.form.value.companyName;
    const companyPhoneNumber = form.form.value.companyPhone;
    const type = form.form.value.type;
    const amount = form.form.value.amount;
    const budgetItems = this.budgetService.createBudgetItem(date, companyName, companyPhoneNumber, type, amount);
  }

  getFullBudget(): Budget[]{
    const budgetName: string = this.budgetId;
    const budgetDescription: string = this.budgetId;
    const budgetItems: (string | number)[] = ['Spire', '212-222-5545', 'Expense', 205.00, '1/12/21'];
    return this.budgetService.getFullBudget(budgetName, budgetDescription, budgetItems);
  }
  getBudgets(): Budget[] {
    this.router.navigate(['/budgetList']);
    return this.budgetService.fullBudget;
  }

}
