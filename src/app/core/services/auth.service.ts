import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import{ environment } from '../../../../src/environment/environment'; 
import { UserI, UserResponseI, Roles } from '../models/user.interface';
import { BehaviorSubject, Observable, catchError, map, throwError  } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();



@Injectable({
  providedIn: 'root'
})

export class AuthService{

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor( private http: HttpClient ){
    this.checkToken();
  };


  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }
    
  login(authData:UserI):Observable<UserResponseI | void>{
    return this.http.post<UserResponseI>(`${environment.API_URL}`, authData)
    .pipe (
      map( (res: UserResponseI) => {
      console.log('resp :' ,  res );
      this.saveToken(res.token);
      this.loggedIn.next(true);
      return res;
    }),
    catchError((err) => this.handlerError(err))
    );
}

// Guarda token
private saveToken(token: string): void{
  localStorage.setItem('token', token);
};

// Elimina token del storage
logout(): void{
  localStorage.removeItem('token');
  this.loggedIn.next(false);
}

private checkToken(): void{
  const userToken = localStorage.getItem('token');
  const isExpired = helper.isTokenExpired(userToken);
  console.log('isEspired', isExpired);
  isExpired ? this.logout() : this.loggedIn.next(true);
};



private handlerError(err: HttpErrorResponse): Observable<never> {
  let errorMessage = 'Error intentando conectar';
  if (err.error instanceof ErrorEvent) {
    errorMessage = `Error: ${err.error.message}`;
  } else if (err.status) {
    errorMessage = `Error: code ${err.status}, ${err.statusText}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
};
  
}