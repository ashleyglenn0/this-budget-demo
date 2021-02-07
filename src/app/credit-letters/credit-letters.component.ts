import { Component, OnInit } from '@angular/core';
import { LetterService } from './letters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-credit-letters',
  templateUrl: './credit-letters.component.html',
  styleUrls: ['./credit-letters.component.scss']
})
export class CreditLettersComponent implements OnInit {
  letterId: any;
  letter: any;

  constructor(private lettersService: LetterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.letterId = +this.route.snapshot.params.id;
    this.letter = this.lettersService.getLetterById(this.letterId);
    console.log(this.letter);
  }

  createLetter(form: NgForm): any {
    const letterName = form.form.value.letterName;
    const description = form.form.value.description;
    const companyName = form.form.value.companyName;
    const companyPhone = form.form.value.companyPhone;
    const type = form.form.value.type;
    const dateSent = form.form.value.dateSent;
    const dateReceived = form.form.value.dateReceived;
    const letterSummary = form.form.value.letterSummary;
    this.lettersService.createLetter(description, companyName, companyPhone, type, dateSent, dateReceived, letterSummary, this.letter);
    form.resetForm();
    console.log(form);
  }

}
