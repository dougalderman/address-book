import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { AddressBookApiService } from '../address-book-api.service';
import { ContactModel } from '../contact-model';

@Component({
  selector: 'app-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrls: ['./address-book-list.component.css']
})
export class AddressBookListComponent implements OnInit {

  contacts: ContactModel[] = [];

  constructor(
    private api: AddressBookApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.api.getContacts()
      .subscribe((contacts: ContactModel[]) => {
        this.contacts = contacts;
        this.api.setContacts(contacts);
        this.spinner.hide();
      });
  }    
}
