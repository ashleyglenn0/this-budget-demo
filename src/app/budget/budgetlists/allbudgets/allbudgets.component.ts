import { Component, OnInit } from '@angular/core';
import { Budget } from '../../budget.model';
import { BudgetService } from '../../../budget.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  allBudgets: Budget[] = [];
  

  constructor(private budgetService: BudgetService, private router: Router) { }

  ngOnInit(): any {
     this.allBudgets = this.budgetService.getAllBudgets();
  }

  onViewBudget(budget: Budget): void{
    this.router.navigate(['/singleBudgetPage', budget.id]);
  }

}
