import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getClientsList } from '../state/actions/clients.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app-state';

@Injectable({
	providedIn: 'root'
})
export class ClientsResolver implements Resolve<boolean> {
	constructor(private store: Store<AppState>) {}

	resolve(): Observable<boolean> {
		this.store.dispatch(getClientsList({ parameters: {}, setNewParams: true }));
		return of(true);
	}
}
