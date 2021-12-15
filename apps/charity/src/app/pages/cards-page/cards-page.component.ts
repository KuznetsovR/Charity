import { Component, OnInit } from '@angular/core';
import { getCardList } from '../../state/actions/cards.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';
import { Observable } from 'rxjs';
import { Card } from '../../interfaces/card.entity';

@Component({
	selector: 'app-cards-page',
	templateUrl: './cards-page.component.html',
	styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {
	cards$: Observable<readonly Card[]> = this.store.select('cards');
	cardKeys = ['Номер', 'Владелец', 'Магазин'];
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.dispatch(getCardList({parameters: {}, setNewParams: true}));
	}
}
