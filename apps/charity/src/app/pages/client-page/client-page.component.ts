import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';
import { ApiService } from '../../services/api.service';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { Client } from '../../interfaces/client.entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalState } from '../../interfaces/modal-state.entity';
import { getClientsList } from '../../state/actions/clients.actions';
import { Observable, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Card } from '../../interfaces/card.entity';
import { getCardList } from '../../state/actions/cards.actions';

@Component({
	selector: 'app-client-page',
	templateUrl: './client-page.component.html',
	styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit, OnDestroy {
	cards$: Observable<readonly Card[]> = this.store.select('cards');
	cardKeys = ['Номер', 'Владелец', 'Магазин'];
	data: Client;
	subs = new Subscription();
	constructor(
		private store: Store<AppState>,
		private apiService: ApiService,
		private cdr: ChangeDetectorRef,
		private route: ActivatedRoute
	) {}
	changeClientForm: FormGroup;
	modalState: ModalState = {
		dataState: 'static',
		isRequestBad: false
	};
	ngOnInit(): void {
		this.subs.add(
			this.route.params.subscribe((params: Params) => {
				const clientId = params.id;
				this.getClient(clientId);
				this.getClientCards(clientId);
			})
		);
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	getClient(clientId: string): void {
		this.apiService.getRequest(`admin/owner/${clientId}`).subscribe((client: Client) => {
			this.data = client;
			this.initChangeClientForm();
		});
	}

	initChangeClientForm(): void {
		this.changeClientForm = new FormGroup({
			passportNumber: new FormControl(this.data.passportNumber, [
				Validators.required,
				Validators.pattern(/^\d{10}$/)
			]),
			name: new FormControl(this.data.name, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]),
			surname: new FormControl(this.data.surname, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]),
			patronymic: new FormControl(this.data.patronymic, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)])
		});
	}

	getClientCards(clientId: string): void {
		this.store.dispatch(
			getCardList({
				parameters: { owner: clientId },
				setNewParams: true
			})
		);
	}

	changeDataState(newState: 'changing' | 'static'): void {
		this.modalState.dataState = newState;
	}

	change(): void {
		if (this.changeClientForm.invalid) {
			this.modalState.isRequestBad = true;
			return;
		}
		this.callAPI({
			active: this.data.active,
			useCount: this.data.useCount,
			passportNumber: this.changeClientForm.controls.passportNumber.value,
			name: this.changeClientForm.controls.name.value,
			surname: this.changeClientForm.controls.surname.value,
			patronymic: this.changeClientForm.controls.patronymic.value
		}).subscribe(() => {
			this.modalState.isRequestBad = false;
			this.changeDataState('static');
			this.cdr.detectChanges();
			this.store.dispatch(getClientsList({ parameters: {}, setNewParams: false }));
		});
	}

	delete(): void {
		this.data = {
			...this.data,
			active: false
		};
		this.callAPI(this.data).subscribe();
	}

	restore(): void {
		this.data = {
			...this.data,
			active: true
		};
		this.callAPI(this.data).subscribe(() => {
			this.store.dispatch(getClientsList({ parameters: {}, setNewParams: false }));
		});
	}

	callAPI(newObject: Client): Observable<Client> {
		return this.apiService.putRequest(`admin/owner/${this.data.id}`, newObject).pipe(
			catchError((err) => {
				const initialState: ModalOptions = {
					class: 'modal-dialog-centered',
					animated: true
				};
				// TODO: opening error modal here
				return of(err);
			})
		);
	}
}
