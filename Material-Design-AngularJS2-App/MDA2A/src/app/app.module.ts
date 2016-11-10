import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

@NgModule({
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
})
export class AppModule { }

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
