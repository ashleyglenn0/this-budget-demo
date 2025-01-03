import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  user: firebase.User|null|undefined;

  paymentsTitle = 'Last Payment: ';
  incomeTitle = 'Last Income: ';
  lettersTitle = 'Upcoming Letter Responses: ';
  lettersResponse = '01/11/2021';
  payment = 0.00;
  income = 0.00;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
    })
  }

  logOut(){
    this.auth.logout();
  }

}
