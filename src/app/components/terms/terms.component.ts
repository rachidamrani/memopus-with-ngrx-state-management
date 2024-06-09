import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { IDataState, Term } from '../../../store/data/dataTypes';
import { Store } from '@ngrx/store';
import { addTerm, filterByTerm } from '../../../store/data/data.action';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class TermsComponent implements OnInit {
  termsArray: Term[] = [];
  term: string = '';

  constructor(private store: Store<{ data: IDataState }>) {}

  ngOnInit() {
    this.store.select('data').subscribe((data) => {
      this.termsArray = data.terms;
    });
  }

  addTerm(form: NgForm) {
    this.store.dispatch(addTerm({ payload: form.value.text }));
  }

  onAddNewTerm() {
    const termModalContainer = document.getElementById('modal-container');
    termModalContainer?.classList.add('isActive');
  }

  closeTermModal() {
    const termModalContainer = document.getElementById('modal-container');
    termModalContainer?.classList.remove('isActive');
  }

  selectTerm(id: string) {
    this.store.dispatch(filterByTerm({ payload: id }));
  }
}
