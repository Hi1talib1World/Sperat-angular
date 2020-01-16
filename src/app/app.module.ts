import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMatSearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
