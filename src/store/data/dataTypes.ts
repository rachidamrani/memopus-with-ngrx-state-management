export interface Term {
  id: string;
  title: string;
}

export interface Column {
  id: string;
  title: string;
}

export interface Card {
  id: string;
  question: string;
  answer: string;
  column: string;
  term: string;
  selected?: boolean;
}

export interface IDataState {
  terms: Term[];
  columns: Column[];
  cards: Card[];
}
