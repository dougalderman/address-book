import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, forkJoin, of } from 'rxjs';

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

  getContactsAPI(): Observable<ContactModel[]> {

    let httpObservable: Observable<any>[] = [];

    for (let i = 0; i < CONTACT_NUMBER; i++) {
      httpObservable.push(this.http.get<ContactModel>('https://randomuser.me/api/'));
    }

    return forkJoin(httpObservable).pipe(
      map((contactArray: any) => 
        contactArray.reduce((previousValue: any, currentValue: any) => previousValue.concat(currentValue.results), [])),
      catchError(this.handleError<ContactModel[]>([]))
    );
  }

  getContacts(): Observable<ContactModel[]> {
    if (this.contacts && this.contacts.length) {
      return of(this.contacts);
    }
    else {
      return this.getContactsAPI();
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
