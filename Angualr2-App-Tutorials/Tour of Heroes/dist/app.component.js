"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        // hero = 'Windstorm';
        this.hero = {
            id: 1,
            name: 'xgqfrms'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{hero.name}} details!</h2>\n        <div>\n            <label>id: </label>\n            <input type=\"text\" value=\"{{hero.id}}\" placeholder=\"id\" readonly disabled>\n        </div>\n        <section class=\"container-fluid\">\n            <iframe width=\"420\" height=\"345\" src=\"https://www.youtube.com/embed/1jAYIs5s6ZU\" frameborder=\"0\" allowfullscreen></iframe>\n        </section>\n        <div>\n            <label>name: </label>\n            <input type=\"text\" [(ngModel)]=\"hero.name\" placeholder=\"name\">\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// typescript static data type
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=app.component.js.map