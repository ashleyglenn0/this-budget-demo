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


   
    
}
    
   
  
