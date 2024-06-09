import { createReducer, on } from '@ngrx/store';
import { loginUser, logoutUser } from './auth.actions';
import { IAuthState } from './authType';

const initialState: IAuthState = {
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state) => ({ ...state, isLoggedIn: true })),
  on(logoutUser, (state) => ({ ...state, isLoggedIn: false }))
);
