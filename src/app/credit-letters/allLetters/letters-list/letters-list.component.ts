import { Component, OnInit } from '@angular/core';
import { CreditLetters } from '../../letter.model';
import { LetterService } from '../../letters.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../../auth.service';


@Component({
  selector: 'app-letters-list',
  templateUrl: './letters-list.component.html',
  styleUrls: ['./letters-list.component.scss']
})
export class LettersListComponent implements OnInit {
  private lettersCollection!: AngularFirestoreCollection<CreditLetters>;
  letters!: Observable<CreditLetters[]>;
  uid: any;

  constructor(private LetterService: LetterService, private router: Router, private afs: AngularFirestore, public auth: AngularFireAuth) {


   
   
  }

  ngOnInit(): any {
    this.auth.user.subscribe((user) => {
      this.uid = user?.uid || '';

    this.lettersCollection = this.afs.collection<CreditLetters>(`Users/${this.uid}/letters`);
    this.letters = this.lettersCollection.valueChanges();


    })



  }



}





