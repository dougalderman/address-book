import { Component, OnInit } from '@angular/core';

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
    private api: AddressBookApiService
  ) { }

  ngOnInit(): void {
    this.api.getUsersAPI()
      .subscribe((users: UserModel[]) => {
        this.users = users;
      });
  }    
}
