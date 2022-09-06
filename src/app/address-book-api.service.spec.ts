import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AddressBookApiService } from './address-book-api.service';

describe('AddressBookApiService', () => {
  let service: AddressBookApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],});
    service = TestBed.inject(AddressBookApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
