import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, forkJoin, of } from 'rxjs';

import { UserModel } from './user-model';

const USER_NUMBER: number = 10;

@Injectable({
  providedIn: 'root'
})
export class AddressBookApiService {

  users: UserModel[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getUsersAPI(): Observable<UserModel[]> {

    let httpObservable: Observable<any>[] = [];

    for (let i = 0; i < USER_NUMBER; i++) {
      httpObservable.push(this.http.get<UserModel>('https://randomuser.me/api/'));
    }

    return forkJoin(httpObservable).pipe(
      map((userArray: any) => 
        userArray.reduce((previousValue: any, currentValue: any) => previousValue.concat(currentValue.results), [])),
      catchError(this.handleError<UserModel[]>([]))
    );
  }

  getUsers(): Observable<UserModel[]> {
    if (this.users && this.users.length) {
      return of(this.users);
    }
    else {
      return this.getUsersAPI();
    }
  }
  
  setUsers(users: UserModel[]) {
    this.users = users;
  }
  
 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
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
