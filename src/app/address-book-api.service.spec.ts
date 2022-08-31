import { TestBed } from '@angular/core/testing';

import { AddressBookApiService } from './address-book-api.service';

describe('AddressBookApiService', () => {
  let service: AddressBookApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressBookApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
