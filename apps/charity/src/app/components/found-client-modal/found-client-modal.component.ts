import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { getClientsList } from '../../state/actions/clients.actions';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/interfaces/client.entity';
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
	modalState: ModalState = {
		dataState: 'static',
		isRequestBad: false
	};
	ngOnInit(): void {
		this.changeClientForm = new FormGroup({
			passportNumber: new FormControl(this.data.passportNumber, [
				Validators.required,
				Validators.pattern(/^\d{10}$/)
			]),
			name: new FormControl(this.data.name, [Validators.required, Validators.pattern(/^[а-яё]+$/i)]),
			surname: new FormControl(this.data.surname, [Validators.required, Validators.pattern(/^[а-яё]+$/i)]),
			patronymic: new FormControl(this.data.patronymic, [Validators.required, Validators.pattern(/^[а-яё]+$/i)])
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
		this.callAPI(this.data).subscribe(() => {
			this.store.dispatch(getClientsList({ parameters: {}, setNewParams: false }));
		});
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
				if (err.error.error === 'Bad Request') {
					this.modalState.isRequestBad = true;
					this.cdr.detectChanges();
				} else {
					this.bsModalRef.hide();
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
