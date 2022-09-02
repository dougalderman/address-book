import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { AddressBookApiService } from '../address-book-api.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrls: ['./address-book-list.component.css']
})
export class AddressBookListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(
    private api: AddressBookApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.api.getUsers()
      .subscribe((users: UserModel[]) => {
        this.users = users;
        this.api.setUsers(users);
        this.spinner.hide();
      });
  }    
}
