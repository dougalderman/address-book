import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddressBookListComponent } from './address-book-list/address-book-list.component';
import { AddressBookDetailComponent } from './address-book-detail/address-book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookListComponent,
    AddressBookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
