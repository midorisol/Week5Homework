import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CovidPipe } from './covid/covid.pipe';
import { CovidDirective } from './covid/covid.directive';

@NgModule({
  declarations: [
    AppComponent,
    CovidPipe,
    CovidDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
