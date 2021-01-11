import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  paymentsTitle = 'Upcoming Payments: ';
  incomeTitle = 'Upcoming Income: ';
  lettersTitle = 'Upcoming Letter Responses: ';
  lettersResponse = '01/11/2021';
  payment = 0.00;
  income = 0.00;

  constructor() { }

  ngOnInit(): void {
  }

}
