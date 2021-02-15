import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Budget } from './budget.model';
import { BudgetItem} from './budgetItem.model';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],

})
export class BudgetComponent implements OnInit {
   budgetId: any;
   budget: any;
   uid: any;

  constructor(private router: Router, private budgetService: BudgetService, private route: ActivatedRoute, private auth: AuthService) {   }

  ngOnInit(): void {
   this.budgetId = +this.route.snapshot.params.id;
   this.budget = this.budgetService.getBudgetById(this.budgetId);
   console.log(this.budget);

   this.auth.getUserState().subscribe(user =>{
     this.uid = user?.uid;
   }) 
  }
  addBudgetItem(form: NgForm): any{
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

   onSubmit(): any{
    this.budgetService.saveBudget(this.budget, this.uid);
  
   }

}
