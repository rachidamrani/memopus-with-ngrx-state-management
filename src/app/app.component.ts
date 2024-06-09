import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  UrlSegment,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthState } from '../store/auth/authType';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TermsComponent } from './components/terms/terms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TermsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  authState$: Observable<IAuthState>;

  constructor(
    private store: Store<{ auth: IAuthState }>,
    private router: Router
  ) {
    this.authState$ = this.store.select('auth');

    this.authState$.subscribe(({ isLoggedIn }) => {
      if (!isLoggedIn) return this.router.navigate(['login']);
      return this.router.navigate(['home']);
    });
  }
}
