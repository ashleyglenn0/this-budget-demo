import { Component, OnInit } from '@angular/core';
import { CreditLetters } from '../../letter.model';
import { LetterService } from '../../letters.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-letters-list',
  templateUrl: './letters-list.component.html',
  styleUrls: ['./letters-list.component.scss']
})
export class LettersListComponent implements OnInit {
  loadedLetters: CreditLetters[] = [];
  uid: any = '';

  constructor(private LetterService: LetterService, private router: Router, private afs: AngularFirestore, public auth: AngularFireAuth, private request: HttpClient) {


    this.auth.user.subscribe((user) => {
      this.uid = user?.uid || '';
    })
    // this.allLetters = this.afs.collection('letters').snapshotChanges();
  }

  ngOnInit(): any {
    this.afs.collection(`Users/${this.uid}/letters`).valueChanges()
      .subscribe(val => console.log(val));

  }

  // private fetchPosts() {
  //   this.request
  //     .get('https://this-budget-1608941109858-default-rtdb.firebaseio.com.json')
  //     .pipe(
  //       map(responseData => {
  //         const lettersArray = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             lettersArray.push({...responseData[key], id: key });
  //           }
  //         }
  //         return lettersArray;
  //       })
  //     )
  //     .subscribe(letters => {
  //       this.loadedLetters = letters;
  //     })
  // }


}



    // // this.allLetters = this.LetterService.getAllLetters();
    // this.allLetters = afs.list(`Users/${this.userId}/letters`).snapshotChanges();

    // return this.allLetters;





