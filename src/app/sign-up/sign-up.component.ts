import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';
  userId: string = '';

  onSubmit(form: NgForm): any{
    console.log(form);
  }

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) { 
    this.auth.user.subscribe((user)=>{
      this.email = email?.uid || '';
      this.password = password?.uid || '';
    });
  }

  ngOnInit(): void { } 

}

