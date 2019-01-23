import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';

import { PositiveAmountPipe } from './positiveamount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    PositiveAmountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
