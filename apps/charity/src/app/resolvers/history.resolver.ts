import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app-state';
import { getHistory } from '../state/actions/history.actions';

@Injectable({
	providedIn: 'root'
})
export class HistoryResolver implements Resolve<boolean> {
	constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

	resolve(): Observable<boolean> {
		this.route.queryParams.subscribe((params) => {
			this.store.dispatch(getHistory({ parameters: params }));
		});
		return of(true);
	}
}
