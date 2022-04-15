import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getCardList } from '../state/actions/cards.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app-state';

@Injectable({
	providedIn: 'root'
})
export class CardsResolver implements Resolve<boolean> {
	constructor(private store: Store<AppState>, private route: ActivatedRoute) {}
	resolve(): Observable<boolean> {
		this.route.queryParams.subscribe((params) => {
			this.store.dispatch(getCardList({ parameters: params }));
		});
		return of(true);
	}
}
