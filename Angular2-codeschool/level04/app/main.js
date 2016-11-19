import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent, RacesComponent ],
  bootstrap: [ AppComponent ],
  providers: [ RacingDataService ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
