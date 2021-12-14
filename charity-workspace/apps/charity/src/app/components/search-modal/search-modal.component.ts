import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store as StateStore } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { getCardList } from '../../state/actions/cards.actions';
import { getClientsList } from '../../state/actions/clients.actions';
import { ApiService } from '../../services/api.service';
import { Store } from 'src/app/interfaces/store.entity';
import { FormControls } from '../form/form-entities';
import { getHistory } from '../../state/actions/history.actions';
import { AppState } from '../../state/app-state';

@Component({
	selector: 'app-search-modal',
	templateUrl: './search-modal.component.html',
	styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
	@Input() dataType;
	selectedStore: Store;

	searchForm: FormGroup;
	number: FormControl;
	passport: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	owner: FormControl;
	cardId: FormControl;
	customerId: FormControl;
	controls: FormControls = {};
	constructor(public bsModalRef: BsModalRef, private apiService: ApiService, private store: StateStore<AppState>) {}
	ngOnInit(): void {
		switch (this.dataType) {
			case 'card':
				this.owner = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
				this.controls.owner = this.owner;
				this.number = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
				this.controls.number = this.number;
				break;
			case 'client':
				this.passport = new FormControl('', [Validators.required, Validators.pattern(/^\d{1,10}$/)]);
				this.controls.passport = this.passport;
				this.name = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
				this.surname = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
				this.patronymic = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
				this.controls.name = this.name;
				this.controls.surname = this.surname;
				this.controls.patronymic = this.patronymic;
				break;
			case 'history':
				this.cardId = new FormControl('', [Validators.required, Validators.pattern(/^\d$/)]);
				this.controls.cardId = this.cardId;
				this.customerId = new FormControl('', [Validators.required, Validators.pattern(/^\d$/)]);
				this.controls.customerId = this.customerId;
				break;
			default:
				throw new Error('Unknown datatype');
		}
		this.searchForm = new FormGroup(this.controls);
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}

	onSubmit(): void {
		switch (this.dataType) {
			case 'client':
				this.store.dispatch(getClientsList({ parameters: this.searchForm.value, setNewParams: true }));
				break;
			case 'card':
				this.store.dispatch(getCardList({ parameters: this.searchForm.value, setNewParams: true }));
				break;
			case 'history':
				this.store.dispatch(getHistory({ parameters: this.searchForm.value, setNewParams: true }));
				break;
			default:
				throw new Error('Unknown datatype');
		}
		this.bsModalRef.hide();
	}
	closeModal(): void {
		this.bsModalRef.hide();
	}
}
