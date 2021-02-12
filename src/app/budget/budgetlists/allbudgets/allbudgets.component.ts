import { Component, OnInit } from '@angular/core';
import { Budget } from '../../budget.model';
import { BudgetService } from '../../../budget.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  private budgetsCollection!: AngularFirestoreCollection<Budget>
  budgets!: Observable<Budget[]>
  uid: any;
  
  

  constructor(private budgetService: BudgetService, private router: Router, private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit(): any {
    
    this.auth.getUserState().subscribe(user =>{
      this.uid = user?.uid;

      // this.budgetService.getAllBudgets();

      // this.budgetService.getAllBudgetsForUser(this.uid);

    this.budgetsCollection = this.afs.collection(`Users/${this.uid}/budgets`).subscribe()

    // this.budgetsCollection = this.afs.collection(`Users/${this.uid}/budgets`); 
    // this.afs.collection(`Users/${this.uid}/budgets`).valueChanges();
    
    
    
  })
    
    
  }

  onViewBudget(budget: Budget): void{
    this.router.navigate(['/singleBudgetPage', budget.id]);
  }

}
