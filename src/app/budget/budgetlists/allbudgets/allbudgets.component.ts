import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allbudgets',
  templateUrl: './allbudgets.component.html',
  styleUrls: ['./allbudgets.component.scss']
})
export class AllbudgetsComponent implements OnInit {
  budgets = [];
  constructor() { }

  ngOnInit(): void {
  }

}
