import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id: </label>
            <input type="text" value="{{hero.id}}" placeholder="id" readonly disabled>
        </div>
        <section class="container-fluid">
            <iframe width="420" height="345" src="https://www.youtube.com/embed/1jAYIs5s6ZU" frameborder="0" allowfullscreen></iframe>
        </section>
        <div>
            <label>name: </label>
            <input type="text" [(ngModel)]="hero.name" placeholder="name">
        </div>
        `

})

export class AppComponent {
    title = 'Tour of Heroes';
    // hero = 'Windstorm';
    hero: Hero = {
      id: 1,
      name: 'xgqfrms'
    };
}
// typescript static data type
export class Hero {
    id: number;
    name: string;
}
