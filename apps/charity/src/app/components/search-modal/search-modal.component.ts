import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store as StateStore } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { getCardList } from '../../state/actions/cards.actions';
import { getClientsList } from '../../state/actions/clients.actions';
import { ApiService } from '../../services/api.service';
import { Store } from 'src/app/interfaces/store.entity';
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
	constructor(public bsModalRef: BsModalRef, private apiService: ApiService, private store: StateStore<AppState>) {}
	ngOnInit(): void {
		switch (this.dataType) {
			case 'card':
				this.searchForm = new FormGroup({
					owner: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]),
					number: new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)])
				});
				break;
			case 'client':
				this.searchForm = new FormGroup({
					passport: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,10}$/)]),
					name: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]),
					surname: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]),
					patronymic: new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)])
				});
				break;
			case 'history':
				this.searchForm = new FormGroup({
					cardId: new FormControl('', [Validators.required, Validators.pattern(/^\d$/)]),
					customerId: new FormControl('', [Validators.required, Validators.pattern(/^\d$/)])
				});
				break;
			default:
				throw new Error('Unknown datatype');
		}
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}

	onSubmit(): void {
		let params;
		this.selectedStore
			? (params = { ...this.searchForm.value, shop: this.selectedStore.id })
			: (params = { ...this.searchForm.value });
		switch (this.dataType) {
			case 'client':
				this.store.dispatch(getClientsList({ parameters: params, setNewParams: true }));
				break;
			case 'card':
				this.store.dispatch(
					getCardList({
						parameters: params,
						setNewParams: true
					})
				);
				break;
			case 'history':
				this.store.dispatch(
					getHistory({
						parameters: params,
						setNewParams: true
					})
				);
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
