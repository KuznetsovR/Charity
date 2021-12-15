import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getCardList } from '../state/actions/cards.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app-state';

@Injectable({
	providedIn: 'root'
})
export class CardsResolver implements Resolve<boolean> {
	constructor(private store: Store<AppState>) {}
	resolve(): Observable<boolean> {
		this.store.dispatch(getCardList({ parameters: {}, setNewParams: true }));
		return of(true);
	}
}
