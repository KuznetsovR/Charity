import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Store } from 'src/app/interfaces/store.entity';
import { catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
	@Input() action: string;
	bsModalRef?: BsModalRef;

	dataForm: FormGroup;
	userTriedToSendInvalid = false;

	selectedStore: Store | null = null;

	constructor(private apiService: ApiService, private modalService: BsModalService) {}

	ngOnInit(): void {
		switch (this.action) {
			case 'Добавить карту':
				this.dataForm = new FormGroup({
					number: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z\d]*$/)]),
					ownerId: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/i)])
				});
				break;
			case 'Добавить получателя':
				this.dataForm = new FormGroup({
					passportNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
					name: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]),
					surname: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]),
					patronymic: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)])
				});
				break;
			default:
				throw new Error('Unknown action in form');
		}
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}

	trimForm(): void {
		Object.keys(this.dataForm.controls).forEach((key) => {
			return typeof this.dataForm.get(key).value === 'string'
				? this.dataForm.get(key).setValue(this.dataForm.get(key).value.trim())
				: null;
		});
	}

	onSubmit(): void {
		this.trimForm();
		if (this.dataForm.invalid) {
			this.userTriedToSendInvalid = true;
			return;
		}
		const initialState: ModalOptions = {
			class: 'modal-dialog-centered',
			animated: true
		};
		switch (this.action) {
			case 'Добавить карту':
				this.apiService
					.postRequest(`admin/card`, {
						id: 0,
						number: this.dataForm.controls.number.value,
						owner: this.dataForm.controls.ownerId.value,
						shop: this.selectedStore.id,
						active: true
					})
					.pipe(
						mergeMap((res) => {
							initialState.initialState = {
								additionalText: 'Карта получателя успешно добавлена'
							};
							this.modalService.show(SuccessModalComponent, initialState);
							return of(res);
						}),
						catchError((err) => {
							this.modalService.show(ErrorModalComponent, initialState);
							return of(err);
						})
					)
					.subscribe();
				break;
			case 'Добавить получателя':
				this.apiService
					.postRequest('admin/owner', {
						id: 0,
						useCount: 0,
						active: true,
						passportNumber: this.dataForm.controls.passportNumber.value,
						name: this.dataForm.controls.name.value,
						surname: this.dataForm.controls.surname.value,
						patronymic: this.dataForm.controls.patronymic.value
					})
					.pipe(
						mergeMap((res) => {
							initialState.initialState = {
								additionalText: 'Получатель успешно добавлен'
							};
							this.modalService.show(SuccessModalComponent, initialState);
							return of(res);
						}),
						catchError((err) => {
							this.modalService.show(ErrorModalComponent, initialState);
							return of(err);
						})
					)
					.subscribe();
				break;
			default:
				throw new Error('unknown action');
		}
	}
}
