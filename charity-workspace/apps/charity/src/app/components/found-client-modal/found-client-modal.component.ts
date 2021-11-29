import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card, Client, FormControls } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { getClientList } from '../../actions/data-table.actions';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-found-client-modal',
	templateUrl: './found-client-modal.component.html',
	styleUrls: ['./found-client-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundClientModalComponent implements OnInit {
	constructor(private store: Store<{ cards: Card[]; clients: Client[] }>, private apiService: ApiService) {}
	data: Client;
	dataState: 'changing' | 'static' = 'static';
	changeClientForm: FormGroup;
	useCount: FormControl;
	passportNumber: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	controls: FormControls = {};
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
		this.dataState = newState;
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
					this.apiService.getRequest('admin/owner').subscribe((data: Client[]) => {
						this.store.dispatch(getClientList({ clients: data }));
					});
					return res;
				})
			)
			.subscribe();
		this.changeDataState('static');
	}
	deleteCard(): void {
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
					return res;
				})
			)
			.subscribe();
	}
}
