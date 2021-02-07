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
            new CreditLetters ('Letter1', 'Inquiry Removal Letter', 'Experian', '888-222-2222', 'Inquiry Removal', '2/3/21', '3/3/21', 'Spoke with Anna at Experian and waiting on removal')
        ];

    }
}

