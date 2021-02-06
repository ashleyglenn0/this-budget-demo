import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private eventAuthError = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthError.asObservable();
   
    newUser: any;

    constructor(private afAuth: AngularFireAuth, 
        private db: AngularFirestore, 
        private router: Router) { }


   getUserState() {
       return this.afAuth.authState;
   }
   
   login( email: string, password: string){
    this.afAuth.signInWithEmailAndPassword(email, password)
    .catch(error => {
        this.eventAuthError.next(error);
    })
    .then( userCredential => {
        if(userCredential) {
            this.router.navigate(['/landingPage']);
        }
    })
   }

   createUser(email: string, password: string, firstName: string, lastName: string) {
       this.afAuth.createUserWithEmailAndPassword(email, password)
       .then( userCredential => {
          
           userCredential.user?.updateProfile( {
               displayName: firstName
           });

           this.insertUserData(userCredential)
           .then(() => {
               this.router.navigate(['/landingPage'])
           });

       })
       .catch( error => {
          this.eventAuthError.next(error); 
       })
   }

   insertUserData(userCredential: firebase.auth.UserCredential){
      return this.db.doc(`Users/${userCredential.user?.uid}`).set({
          email: this.newUser.email,
          firstname: this.newUser.firstName,
          lastname: this.newUser.lastName,
          role: 'network user'
      }) 

   }
   logout(){
       return this.afAuth.signOut();
   }

    
}
    
   
  
