import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}
