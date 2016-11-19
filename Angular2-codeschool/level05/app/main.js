import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { RaceService } from './race.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RacesComponent ,HttpModule ],
  providers: [ RaceService ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
