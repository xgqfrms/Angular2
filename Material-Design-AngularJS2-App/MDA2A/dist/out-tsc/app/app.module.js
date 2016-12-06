var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                DialogComponentComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule
            ],
            providers: [],
            bootstrap: [AppComponent],
            imports: [MaterialModule.forRoot()]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
/*
//导入 Angular Material NgModule

//src/app/app.module.ts

 import { MaterialModule } from '@angular/material';
 // other imports
 @NgModule({
 imports: [MaterialModule.forRoot()],
 ...
 })
 export class PizzaPartyAppModule { }
*/
//# sourceMappingURL=G:/wwwRoot/AngularJS/Material-Design-AngularJS2-App/MDA2A/src/app/app.module.js.map