import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService, private router: Router) {}

  
ngOnInit(){
  this.auth.eventAuthError$.subscribe( data => {
    this.authError = data;
  })

}

login(form: NgForm): any {
  this.auth.login(form.value.email, form.value.password);
}

  
  
}
