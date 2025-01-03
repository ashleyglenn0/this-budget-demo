import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 
  authError: any;
  

constructor (private auth: AngularFireAuth, private authService: AuthService, private router: Router){
 
}

ngOnInit(): void { 
  this.authService.eventAuthError$.subscribe( data => {
    this.authError = data;
  })
}



  createUser(form: NgForm): any {
   const email = form.value.email;
   const password = form.value.password;
   const firstName = form.value.firstName;
   const lastName = form.value.lastName;
   
    this.authService.createUser(email, password, firstName, lastName);
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/landingPage']);
}


 

}

