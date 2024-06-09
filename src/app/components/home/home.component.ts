import { Component, OnInit } from '@angular/core';
import { TermsComponent } from '../terms/terms.component';
import { Card, IDataState } from '../../../store/data/dataTypes';
import { Store } from '@ngrx/store';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [TermsComponent, CardComponent],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];

  constructor(private store: Store<{ data: IDataState }>) {}

  ngOnInit() {
    this.store.select('data').subscribe((data) => {
      this.cards = data.cards;
    });
  }
}
