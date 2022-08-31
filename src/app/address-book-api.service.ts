import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, forkJoin, of } from 'rxjs';

import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookApiService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(userNumber: number): Observable<UserModel[]> {

    let users: any = [];

    for (let i = 0; i < userNumber; i++) {
      users.push(this.http.get<UserModel>('https://randomuser.me/api/'));
    }

    return forkJoin(users).pipe(
      map((userArray: any) => 
        userArray.reduce((previousValue: any, currentValue: any) => previousValue.concat(currentValue.results), []))
    );  
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
