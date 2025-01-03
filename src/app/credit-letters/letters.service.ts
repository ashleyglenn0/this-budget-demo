import { Injectable } from '@angular/core';
import { CreditLetters } from './letter.model';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

// export interface CreditLetters {
//     userId: string;
//     name: string;
//     description: string;
//     companyName: string;
//     companyPhone: string;
//     type: string;
//     dateSent: string;
//     dateReceived: string;
//     letterSummary: string;  
// }

@Injectable({
    providedIn: 'root'
})

export class LetterService {
    creditLetters: CreditLetters[] = [];
    private lettersCollection!: AngularFirestoreCollection<CreditLetters>;
    letters!: Observable<CreditLetters[]>;
    userId: string = "";

    constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {
        this.auth.user.subscribe((user) => {
            this.userId = user?.uid || "";
            this.lettersCollection = this.afs.collection<CreditLetters>('letters', ref => ref.where('userId', '==', this.userId));
            this.letters = this.afs.collection<CreditLetters>('letters').valueChanges();
        });

        const temp = localStorage.getItem('creditLetters');

        if (temp !== null){
            this.letters = JSON.parse(temp);
        }else{
            localStorage.setItem('creditLetters', '[]');
            this.creditLetters = [];
        }


      

    }



    // addLetter() {
    //     this.lettersCollection.add({
    //         userId: this.userId,
    //         name: 'Experian Dispute Letter',
    //         description: 'Disputing Hospital bill',
    //         companyName: 'Depaul Hospital',
    //         companyPhone: '888-888-8888',
    //         type: 'dispute',
    //         dateSent: '2/3/21',
    //         dateReceived: '3/3/21',
    //         letterSummary: 'Waiting on response'
    //     }).then(function (docRef) {
    //         console.log('Document written with ID: ', docRef.id)
    //     })
    // }

    getLetters(){
        return this.letters;
    }

    createLetter(name: string, description: string, companyName: string, companyPhone: string, type: string, dateSent: string, dateReceived: string, letterSummary: string){
    const letter: CreditLetters = new CreditLetters( name, description, companyName, companyPhone, type, dateSent, dateReceived, letterSummary);
    this.creditLetters.push(letter);
    this.persistLettersData();
    return letter.id;
}

getLetterById(id: number): CreditLetters|undefined {
    for(let i= 0; i < this.creditLetters.length; i++){
        if(this.creditLetters[i].id === id){
            return this.creditLetters[i];
        }
    }
    return undefined;
}

persistLettersData(): void{
localStorage.setItem('creditLetters', JSON.stringify(this.creditLetters));
}

// getAllLetters(): CreditLetters[] {
//     return this.creditLetters;
// }

}

