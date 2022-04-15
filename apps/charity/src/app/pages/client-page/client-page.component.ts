import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';
import { ApiService } from '../../services/api.service';
import { Client } from '../../interfaces/client.entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalState } from '../../interfaces/modal-state.entity';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Card } from '../../interfaces/card.entity';
import { getCardList } from '../../state/actions/cards.actions';

@Component({
	selector: 'app-client-page',
	templateUrl: './client-page.component.html',
	styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
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
		this.route.params.subscribe((params: Params) => {
			const clientId = params.id;
			this.getClient(clientId);
			this.getClientCards(clientId);
		});
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
				parameters: { owner: clientId }
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
			this.getClient(this.data.id.toString());
			this.getClientCards(this.data.id.toString());
			this.cdr.detectChanges();
		});
	}

	delete(): void {
		const newClient = {
			...this.data,
			active: false
		};
		this.callAPI(newClient).subscribe(() => {
			this.getClient(this.data.id.toString());
			this.getClientCards(this.data.id.toString());
		});
	}

	restore(): void {
		const newClient = {
			...this.data,
			active: true
		};
		this.callAPI(newClient).subscribe((res: Client) => {
			if (res.active !== null && res.active !== undefined) {
				this.data = res;
				this.getClientCards(this.data.id.toString());
			}
		});
	}

	callAPI(newObject: Client): Observable<Client> {
		return this.apiService.putRequest(`admin/owner/${this.data.id}`, newObject) as Observable<Client>;
	}
}
