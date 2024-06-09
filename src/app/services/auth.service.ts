import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthState } from '../../store/auth/authType';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { loginUser } from '../../store/auth/auth.actions';

interface User {
  id: string;
  login: string;
  pwd: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private store: Store<{ auth: IAuthState }>
  ) {}

  login(email: string, password: string) {
    return this.http
      .get<User[]>('http://localhost:3000/users')
      .pipe(map((data) => data[0]))
      .subscribe((user) => {
        if (user.login == email && user.pwd == password) {
          this.store.dispatch(loginUser());
        } else {
          alert('Identifiants invalides');
        }
      });
  }
}
