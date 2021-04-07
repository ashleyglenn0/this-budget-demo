import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget.model';
import { BudgetService } from '../../budget.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BudgetItem } from '..//budgetItem.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-single-budget',
  templateUrl: './single-budget.component.html',
  styleUrls: ['./single-budget.component.scss']
})

export class SingleBudgetComponent implements OnInit {
  private budgetDoc!: AngularFirestoreDocument<Budget> | undefined;
  uid: any;
  budgetId: any;
  budgetSubscription: Observable<Budget | undefined> | undefined;
  expense: number = 0;
  income: number = 0;
  total: number = 0;
  expenseList: BudgetItem[] = [];
  incomeList: BudgetItem[] = [];
  budget: Budget | undefined;

  constructor(private router: Router, private budgetService: BudgetService, private route: ActivatedRoute, private auth: AuthService, private afs: AngularFirestore) {
    this.route.params.subscribe(params => this.budgetId = params.id)


  }



  ngOnInit(): void {
    this.auth.getUserState().subscribe(user => {
      this.uid = user?.uid;
      this.budgetDoc = this.afs.doc<Budget>(`Users/${this.uid}/budgets/${this.budgetId}`);
      this.budgetSubscription = this.budgetDoc.valueChanges();
      this.budgetSubscription?.subscribe(budget => {
        this.budget = budget;
        this.expenseList = this.budget?.budgetItems.filter(item => item.type === 'Expense') || [];
        this.incomeList = this.budget?.budgetItems.filter(item => item.type === 'Income') || [];
        this.expense = this.expenseList.reduce((total, next) => total -= next.amount, 0) || 0.00;
        this.income = this.incomeList.reduce((total, next) => total += next.amount, 0) || 0.00;
        this.total = (this.expense - this.income);
      })

    })



  }



}
