import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
 import { Observable } from 'rxjs';
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

login(loginForm){
  this.auth.login(loginForm.value.email, loginForm.value.password);
}
  
  
}
