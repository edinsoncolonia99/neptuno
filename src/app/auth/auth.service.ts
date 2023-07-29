import { Injectable } from '@angular/core';
import { User } from '../auth/user.interface';
import { delay, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User | null;

  constructor() {
    const userString = localStorage.getItem("user");
    this.user = userString ? JSON.parse(userString) : null;
  }

  login(): Observable<User> {
    return of({ name: "edinson", email: "edinsoncolonia@gmail.com" }).pipe(
      delay(750),
      tap(user => {
        if (user) {
          this.user = user;
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    this.user = null;
    localStorage.removeItem("user");
  }
}
