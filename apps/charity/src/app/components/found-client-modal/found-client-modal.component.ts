import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { getClientsList } from '../../state/actions/clients.actions';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/interfaces/client.entity';
import { FormControls } from '../form/form-entities';
import { ModalState } from 'src/app/interfaces/modal-state.entity';
import { AppState } from '../../state/app-state';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
	selector: 'app-found-client-modal',
	templateUrl: './found-client-modal.component.html',
	styleUrls: ['./found-client-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundClientModalComponent implements OnInit {
	constructor(
		private store: Store<AppState>,
		private apiService: ApiService,
		private cdr: ChangeDetectorRef,
		private bsModalRef: BsModalRef,
		private modalService: BsModalService
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
	change(): void {
		this.callAPI({
			active: this.data.active,
			useCount: this.useCount.value,
			passportNumber: this.passportNumber.value,
			name: this.name.value,
			surname: this.surname.value,
			patronymic: this.patronymic.value
		}).subscribe(() => {
			this.changeRequestCorrectnessState(false);
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
		this.callAPI({
			...this.data,
			active: false
		}).subscribe(() => {
			this.store.dispatch(getClientsList({ parameters: {}, setNewParams: false }));
		});
	}
	restore(): void {
		this.data = {
			...this.data,
			active: true
		};
		this.callAPI({
			...this.data,
			active: true
		}).subscribe(() => {
			this.store.dispatch(getClientsList({ parameters: {}, setNewParams: false }));
		});
	}
	callAPI(newObject: Client): Observable<Client> {
		return this.apiService.putRequest(`admin/owner/${this.data.id}`, newObject).pipe(
			catchError((err) => {
				if (err.error.error === 'Bad Request') {
					this.changeRequestCorrectnessState(true);
					this.cdr.detectChanges();
				} else {
					const initialState: ModalOptions = {
						class: 'modal-dialog-centered',
						animated: true
					};
					this.bsModalRef = this.modalService.show(ErrorModalComponent, initialState);
				}
				return of(err);
			})
		);
	}
	closeModal(): void {
		this.bsModalRef.hide();
	}
}