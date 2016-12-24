import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

import 'hammerjs';


@NgModule({
    declarations: [
        AppComponent,
        FormValidationComponent
    ],
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }