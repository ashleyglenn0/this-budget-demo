import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  onSubmit(form: NgForm): any{
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {}

}
