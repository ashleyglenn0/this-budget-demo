import { Component, OnInit } from '@angular/core';
import { LetterService } from './letters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


// export interface CreditLetters {
//   userId: string;
//   letterName: string;
//   description: string;
//   companyName: string;
//   companyPhone: string;
//   type: string;
//   dateSent: string;
//   dateReceived: string;
//   letterSummary: string;
// }

@Component({
  selector: 'app-credit-letters',
  templateUrl: './credit-letters.component.html',
  styleUrls: ['./credit-letters.component.scss']
})
export class CreditLettersComponent implements OnInit {
  // letterId: any;
  // letter: any;
  // private lettersCollection!: AngularFirestoreCollection<CreditLetters>;
  // letters!: Observable<CreditLetters[]>
  userId: string = '';


  constructor(private lettersService: LetterService, private router: Router, private route: ActivatedRoute, private afAuth: AuthService, private db: AngularFirestore, public auth: AngularFireAuth) { 
    this.auth.user.subscribe((user) => {
      this.userId = user?.uid || '';
    })
    
  }

  ngOnInit(): void {
    // this.letterId = +this.route.snapshot.params.id;
    // this.letter = this.lettersService.getLetterById(this.letterId);
    // console.log(this.letter);

  }

  onSubmit(form: NgForm): any {
    const letterName = form.form.value.letterName;
    const description = form.form.value.description;
    const companyName = form.form.value.companyName;
    const companyPhone = form.form.value.companyPhone;
    const type = form.form.value.type;
    const dateSent = form.form.value.dateSent;
    const dateReceived = form.form.value.dateReceived;
    const letterSummary = form.form.value.letterSummary;
    this.db.collection(`Users/${this.userId}/letters`).add({letterName,description,companyName,companyPhone,type,dateSent,dateReceived,letterSummary});
     this.lettersService.createLetter(letterName, description, companyName, companyPhone, type, dateSent, dateReceived, letterSummary);
    form.resetForm();
    console.log(form);
  }

  logout(){
    this.router.navigate(['/']);
  }

}
