import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { getClientsList } from '../state/actions/clients.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app-state';

@Injectable({
	providedIn: 'root'
})
export class ClientsResolver implements Resolve<void> {
	constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

	resolve(): void {
		this.route.queryParams.subscribe((params) => {
			this.store.dispatch(getClientsList({ parameters: params }));
		});
	}
}
