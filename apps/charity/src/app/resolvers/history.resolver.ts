import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app-state';
import { getHistory } from '../state/actions/history.actions';

@Injectable({
	providedIn: 'root'
})
export class HistoryResolver implements Resolve<void> {
	constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

	resolve(): void {
		this.route.queryParams.subscribe((params) => {
			this.store.dispatch(getHistory({ parameters: params }));
		});
	}
}
