import { Injectable } from '@angular/core';
import { User } from '../app/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) {

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

   
    
    signedIn(){
    firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
            const uid = user.uid;
        } else {

        }
  });
}
    
    login(email: string, password: string) {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    logout() {
        this.auth.signOut();
    }
  }
