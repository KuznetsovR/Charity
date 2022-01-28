import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';
import { ApiService } from '../../services/api.service';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { Client } from '../../interfaces/client.entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalState } from '../../interfaces/modal-state.entity';
import { getClientsList } from '../../state/actions/clients.actions';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-client-page',
	templateUrl: './client-page.component.html',
	styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
	data: Client;
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
		this.apiService
			.getRequest(`admin/owner/${this.route.snapshot.paramMap.get('id')}`)
			.subscribe((client: Client) => {
				this.data = client;
				this.changeClientForm = new FormGroup({
					passportNumber: new FormControl(this.data.passportNumber, [
						Validators.required,
						Validators.pattern(/^\d{10}$/)
					]),
					name: new FormControl(this.data.name, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]),
					surname: new FormControl(this.data.surname, [
						Validators.required,
						Validators.pattern(/^[а-яё ]+$/i)
					]),
					patronymic: new FormControl(this.data.patronymic, [
						Validators.required,
						Validators.pattern(/^[а-яё ]+$/i)
					])
				});
			});
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
