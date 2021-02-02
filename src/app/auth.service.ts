import { Injectable } from '@angular/core';
import { User } from '../app/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(public auth: AngularFireAuth) {

    }

    signUpWithEmailPassword(email: string, password: string) {
        email = '';
        password = '';
        
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    }
     
    
    login() {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    logout() {
        this.auth.signOut();
    }
  }
