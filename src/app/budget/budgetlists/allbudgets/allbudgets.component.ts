import { Component, OnInit } from '@angular/core';
import { Budget } from '../../budget.model';
import { BudgetService } from '../../../budget.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { NONE_TYPE } from '@angular/compiler';



@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  private budgetsCollection!: AngularFirestoreCollection<Budget>
  budgets!: Observable<Budget[]>
  uid: any;
  singleBudget: any;
  wantsToDelete = true;



  constructor(private budgetService: BudgetService, private router: Router, private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit(): any {

    this.auth.getUserState().subscribe(user => {
      this.uid = user?.uid;



      this.budgetsCollection = this.afs.collection<Budget>(`Users/${this.uid}/budgets`);
      this.budgets = this.budgetsCollection.valueChanges({ idField: 'id' });


    })


  }


  onViewBudget(budget: Budget): void {
    this.router.navigate(['/singleBudgetPage', budget.id]);
  }

  onDeleteBudget(budget: Budget): any {
    confirm('Are you sure you want to delete this budget?');
    this.afs.collection(`Users/${this.uid}/budgets`).doc(budget.id).delete();
  }
  onUpdateBudget(budget: Budget): any {
    this.singleBudget = this.afs.collection(`Users/${this.uid}/budgets`).doc(budget.id).update({
      name: 'Ashleys budget',
      description: 'Budget for the crib',
      budgetItems: [{
        date: '4/12/21',
        companyName: 'Spire',
        companyPhone: '888-888-8888',
        type: 'Expense',
        amount: -125.47,
        notes: 'For gas bill'
      }
        
      ]
    });
     
    
  }

}

