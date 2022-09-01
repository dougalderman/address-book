import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, forkJoin, of } from 'rxjs';

import { UserModel } from './user-model';

const USER_NUMBER: number = 10;

@Injectable({
  providedIn: 'root'
})
export class AddressBookApiService {

  declare usersObservable: Observable<UserModel[]>;

  constructor(
    private http: HttpClient
  ) { }

  getUsersAPI(): Observable<UserModel[]> {

    let httpObservable: Observable<any>[] = [];

    for (let i = 0; i < USER_NUMBER; i++) {
      httpObservable.push(this.http.get<UserModel>('https://randomuser.me/api/'));
    }

    this.usersObservable = forkJoin(httpObservable).pipe(
      map((userArray: any) => 
        userArray.reduce((previousValue: any, currentValue: any) => previousValue.concat(currentValue.results), []))
    );

    return this.usersObservable;
  }

  getUsers(): Observable<UserModel[]> {
    console.log('this.usersObservable: ', this.usersObservable);
    if (this.usersObservable) {
      return this.usersObservable;
    }
    else {
      return this.getUsersAPI();
    }
  }  
  
 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


}
