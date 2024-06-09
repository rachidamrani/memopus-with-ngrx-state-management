import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { IAuthState } from '../../../store/auth/authType';
import { Store } from '@ngrx/store';
import { logoutUser } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authState$: Observable<IAuthState>;
  userIsLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private store: Store<{ auth: IAuthState }>
  ) {
    this.authState$ = this.store.select('auth');

    this.authState$.subscribe(({ isLoggedIn }) => {
      this.userIsLoggedIn = isLoggedIn;
    });
  }

  onRedirectToLoginPage() {
    this.router.navigate(['login']);
  }

  onLogout() {
    this.store.dispatch(logoutUser());
    this.router.navigate(['login']);
  }
}
