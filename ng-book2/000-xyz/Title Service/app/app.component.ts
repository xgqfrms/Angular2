// Import the native Angular services.
import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
selector: 'my-app',
styles:[`li{margin: 10px; color: red; border: 3px solid #f0f; width: 32%;}, 
button.b{border: 3px solid #f0f !important; color: red !important;}`],
template:
  `<p>
    Select a title to set on the current HTML document:
  </p>

  <ul>
    <li><button class="b btn btn-primary" (click)="setTitle( 'Good morning!' )">Good morning</button ></li>
    <li><button class="b btn btn-primary" (click)="setTitle( 'Good afternoon!' )">Good afternoon</button></li>
    <li><button class="b btn btn-primary" (click)="setTitle( 'Good evening!' )">Good evening</button></li>
  </ul>
  `
})
export class AppComponent {
  public constructor(private titleService: Title ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
