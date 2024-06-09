import { createAction } from '@ngrx/store';
import { LOGIN, LOGOUT } from './auth.constants';

export const loginUser = createAction(LOGIN);
export const logoutUser = createAction(LOGOUT);
