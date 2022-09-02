import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AddressBookApiService } from '../address-book-api.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-address-book-detail',
  templateUrl: './address-book-detail.component.html',
  styleUrls: ['./address-book-detail.component.css']
})
export class AddressBookDetailComponent implements OnInit {

  declare user: UserModel;

  constructor(
    private api: AddressBookApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail() {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    console.log('index: ', index);

    this.api.getUsers()
      .subscribe((users) => {
        console.log('users: ', users);
        if (users && users.length) {
          this.user = users[index];
          this.api.setUsers(users);
        }  
      });
  }
}
