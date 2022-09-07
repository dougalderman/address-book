import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { AddressBookApiService } from '../address-book-api.service';
import { ContactModel } from '../contact-model';

@Component({
  selector: 'app-address-book-detail',
  templateUrl: './address-book-detail.component.html',
  styleUrls: ['./address-book-detail.component.css']
})
export class AddressBookDetailComponent implements OnInit {

  declare contact: ContactModel;

  constructor(
    private api: AddressBookApiService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getContactDetail();
  }

  getContactDetail() {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.spinner.show();

    this.api.getContacts(1)
      .subscribe((contacts) => {
        if (contacts && contacts.length) {
          this.contact = contacts[index];
          this.api.setContacts(contacts);
          this.spinner.hide();
        }  
      });
  }
}
