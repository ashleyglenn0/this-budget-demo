import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Budget } from '../budget/budget.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  private budgetsCollection!: AngularFireStoreCollection<Budget>;
  budgets!: Observable<Budget[]>;
  userId: string = "";

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore, private firestoreCollection: AngularFirestoreCollection, private router: Router) {
    this.auth.user.subscribe((user) => {
      this.userId = user?.uid || "";
      this.budgetsCollection = this.afs.collection<Budget>('budgets', ref => ref.where('userId', '==', this.userId));
      this.budgets = this.budgetsCollection.valueChanges();
    })
   }

  ngOnInit(): void {
 
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/landingPage', this.userId]);
}

logout() {
  this.auth.signOut();
}

}
