import { Component, OnInit } from '@angular/core';

import { Book } from '../book.module';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  xmodule = new Book(1, "","","");
  //xmodule = new Book(1, "abc","xgqfrms","https://www.xgqfrms.xyz");

  constructor() { }

  ngOnInit() {
  }

  get currentBook() {
    return JSON.stringify(this.xmodule);
  }
}
