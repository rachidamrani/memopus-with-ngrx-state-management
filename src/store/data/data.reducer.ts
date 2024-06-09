import { createReducer, on } from '@ngrx/store';
import { IDataState } from './dataTypes';
import { addTerm, filterByTerm } from './data.action';

const initialState: IDataState = {
  terms: [
    { id: '1', title: 'HTML' },
    { id: '2', title: 'CSS' },
    { id: '3', title: 'JS' },
  ],
  columns: [
    { id: '1', title: 'A apprendre' },
    { id: '2', title: 'Je sais un peu' },
    { id: '3', title: 'Je sais bien' },
    { id: '4', title: 'Je sais parfaitement' },
  ],
  cards: [
    {
      id: '1',
      question: 'Qui a inventé le web ?',
      answer: 'Tim Berners-Lee',
      column: '1',
      term: '1',
    },
    {
      id: '2',
      question: "Qui est à l'origine des premières feuilles de style ?",
      answer: 'Robert Cailliau',
      column: '2',
      term: '2',
    },
    {
      id: '3',
      question: 'Qui a inventé le JavaScript ?',
      answer: 'Brendan Eich',
      column: '3',
      term: '3',
    },
  ],
};

export const dataReducer = createReducer(
  initialState,
  on(filterByTerm, (state, action) => ({
    ...state,
    cards: state.cards.map((card) => {
      return { ...card, selected: card.id === action.payload ? true : false };
    }),
  })),
  on(addTerm, (state, action) => {
    // Should do a check if the term already exist before adding it to the list of terms
    const foundTerm = state.terms.find(
      (term) => term.title.toLowerCase() === action.payload.toLowerCase()
    );
    if (!foundTerm) {
      return {
        ...state,
        terms: [
          ...state.terms,
          { id: (state.terms.length + 1).toString(), title: action.payload },
        ],
      };
    }
    alert('This term already exist');
    return state;
  })
);
