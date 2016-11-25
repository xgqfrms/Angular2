import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../template/index.html',
    styleUrls:['../public/css/style.css']

})

export class AppComponent {
    title = 'Tour of Heroes';
    // hero = 'xgqfrms';
    hero: Hero = {
      id: 1,
      name: 'xgqfrms'
    };
    heroes = HEROES;
}
// typescript static data type
export class Hero {
    id: number;
    name: string;
}

// Ajax web service
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
