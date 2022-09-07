import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, of } from 'rxjs';

import { ContactModel } from './contact-model';

const CONTACT_NUMBER: number = 10;

@Injectable({
  providedIn: 'root'
})
export class AddressBookApiService {

  contacts: ContactModel[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getContactsAPI(pageNumber: number): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>('https://randomuser.me/api/?seed=nuvalence&inc=gender,name,location,email,phone,cell,picture&results=' + CONTACT_NUMBER + '&page=' + pageNumber)
      .pipe(
        map((contacts: any) => contacts.results),
        catchError(this.handleError<ContactModel[]>([]))  
      )
  }

  getContacts(pageNumber: number): Observable<ContactModel[]> {
    if (this.contacts && this.contacts.length) {
      return of(this.contacts);
    }
    else {
      return this.getContactsAPI(pageNumber);
    }
  }
  
  setContacts(contacts: ContactModel[]) {
    this.contacts = contacts;
  }
  
 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param result - optional value to return as the observable result
 */
    private handleError<T> (result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
