import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, mergeMap } from 'rxjs/operators';
import { getClientList } from '../../state/actions/data-table.actions';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';
import { FormControls } from '../form/form-entities';
import { ModalState } from 'src/app/interfaces/modal-state.entity';

@Component({
	selector: 'app-found-client-modal',
	templateUrl: './found-client-modal.component.html',
	styleUrls: ['./found-client-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundClientModalComponent implements OnInit {
	constructor(
		private store: Store<{ cards: Card[]; clients: Client[] }>,
		private apiService: ApiService,
		private cdr: ChangeDetectorRef
	) {}
	data: Client;
	changeClientForm: FormGroup;
	useCount: FormControl;
	passportNumber: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	controls: FormControls = {};
	modalState: ModalState = {
		dataState: 'static',
		isRequestBad: false
	};
	ngOnInit(): void {
		this.useCount = new FormControl(this.data.useCount, [Validators.required, Validators.pattern(/^[0-9]*$/gm)]);
		this.controls.useCount = this.useCount;
		this.passportNumber = new FormControl(this.data.passportNumber, [
			Validators.required,
			Validators.pattern(/^\d{10}$/)
		]);
		this.controls.passportNumber = this.passportNumber;

		this.name = new FormControl(this.data.name, [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
		this.controls.name = this.name;
		this.surname = new FormControl(this.data.surname, [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
		this.controls.surname = this.surname;
		this.patronymic = new FormControl(this.data.patronymic, [
			Validators.required,
			Validators.pattern(/^[а-яё]+$/i)
		]);
		this.controls.patronymic = this.patronymic;

		this.changeClientForm = new FormGroup(this.controls);
	}
	changeDataState(newState: 'changing' | 'static'): void {
		this.modalState.dataState = newState;
	}
	changeRequestCorrectnessState(newState: boolean): void {
		this.modalState.isRequestBad = newState;
	}
	changeClient(): void {
		this.apiService
			.putRequest('admin/owner', {
				id: this.data.id,
				active: true,
				useCount: this.useCount.value,
				passportNumber: this.passportNumber.value,
				name: this.name.value,
				surname: this.surname.value,
				patronymic: this.patronymic.value
			})
			.pipe(
				mergeMap((res) => {
					this.changeRequestCorrectnessState(false);
					this.changeDataState('static');
					this.cdr.detectChanges();
					this.apiService.getRequest('admin/owner').subscribe((data: Client[]) => {
						this.store.dispatch(getClientList({ clients: data }));
					});
					return of(res);
				}),
				catchError((err) => {
					if (err.error.error === 'Bad Request') {
						this.changeRequestCorrectnessState(true);
						this.cdr.detectChanges();
					}
					return of(err);
				})
			)
			.subscribe();
	}
	deleteClient(): void {
		this.apiService
			.putRequest('admin/owner', {
				...this.data,
				active: false
			})
			.pipe(
				mergeMap((res) => {
					this.apiService.getRequest('admin/owner').subscribe((data: Client[]) => {
						this.store.dispatch(getClientList({ clients: data }));
					});
					return of(res);
				})
			)
			.subscribe();
	}
}
