import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { FormsModule }   from '@angular/forms';

import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule ,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
