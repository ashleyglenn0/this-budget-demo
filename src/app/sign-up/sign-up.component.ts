import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
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
  email: string = '';
  password: string = '';
  userId: string = '';
  

constructor (public auth: AngularFireAuth, public authService: AuthService, public afs: AngularFirestore, private router: Router){
 
  this.auth.user.subscribe((user) => {
    this.userId = user?.uid || "";
  }); 
}



  onSubmit(form: NgForm): any {
    const name = form.form.value.name;
    const email = form.form.value.email;
    const password = form.form.value.password;
    this.authService.signUpWithEmailPassword(email, password);
    this.router.navigate(['/landingPage', this.userId]);

    console.log(form);
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/landingPage', this.userId]);
}


  ngOnInit(): void { }

}

