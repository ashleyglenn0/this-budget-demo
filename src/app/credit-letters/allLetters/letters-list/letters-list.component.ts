import { Component, OnInit } from '@angular/core';
import { CreditLetters } from '../../letter.model';
import { LetterService } from '../../letters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letters-list',
  templateUrl: './letters-list.component.html',
  styleUrls: ['./letters-list.component.scss']
})
export class LettersListComponent implements OnInit {
  allLetters: CreditLetters[] = [];

  constructor(private LetterService: LetterService, private router: Router) { }

  ngOnInit(): any {
    this.allLetters = this.LetterService.getAllLetters();
  }

}
