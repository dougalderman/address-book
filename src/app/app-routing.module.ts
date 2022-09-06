import { AddressBookListComponent } from './address-book-list/address-book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressBookDetailComponent } from './address-book-detail/address-book-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AddressBookListComponent },
  { path: 'detail/:index', component: AddressBookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
