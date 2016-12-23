import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormValidoComponent } from './form-valido/form-valido.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
    declarations: [
        AppComponent,
        FormValidoComponent,
        FormValidationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
