import { Injectable } from '@angular/core';
import { CreditLetters } from './letter.model';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})

export class LetterService {
    creditLetters: CreditLetters[] = [];

    constructor() {
        this.creditLetters = [
            new CreditLetters ('Letter1', 'Inquiry Removal Letter', 'Experian', '888-222-2222', 'Inquiry Removal', '2/3/21', '3/3/21', 'Spoke with Anna at Experian and waiting on removal'),
            new CreditLetters ('Letter2', 'Goodwill', 'Experian', '888-222-2222', 'Goodwill', '2/3/21', '3/3/21', 'Spoke with Anna at Experian and waiting on removal'),
            new CreditLetters ('Letter3', 'Dispute', 'Experian', '888-222-2222', 'Dispute', '2/3/21', '3/3/21', 'Spoke with Anna at Experian and waiting on removal')
        ];

    }


createLetter(name: string, description: string, companyName: string, companyPhone: string, type: string, dateSent: string, dateReceived: string, letterSummary: string){
    const letter: CreditLetters = new CreditLetters( name, description, companyName, companyPhone, type, dateSent, dateReceived, letterSummary);
    this.creditLetters.push(letter);
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

getAllLetters(): CreditLetters[] {
    return this.creditLetters;
}

}

