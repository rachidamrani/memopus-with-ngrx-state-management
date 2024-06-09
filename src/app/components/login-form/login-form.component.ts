import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { IAuthState } from '../../../store/auth/authType';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  authState$: Observable<IAuthState>;

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: IAuthState }>
  ) {
    this.authState$ = this.store.select('auth');

    this.authState$.subscribe(({ isLoggedIn }) => {
      if (isLoggedIn) {
        this.router.navigate(['home']);
      }
    });
  }

  loginUser(formData: NgForm) {
    const { email, password } = formData.value;

    this.authService.login(email, password);
  }
}
