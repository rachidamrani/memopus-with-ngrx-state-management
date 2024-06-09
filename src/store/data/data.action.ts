import { createAction, props } from '@ngrx/store';
import { ADD_TERM, FILTER_BY_TERM } from './data.constants';

export const filterByTerm = createAction(
  FILTER_BY_TERM,
  props<{ payload: string }>()
);

export const addTerm = createAction(ADD_TERM, props<{ payload: string }>());
