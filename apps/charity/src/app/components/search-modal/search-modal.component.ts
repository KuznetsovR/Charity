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
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search-modal',
	templateUrl: './search-modal.component.html',
	styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
	@Input() dataType;
	selectedStore: Store;

	searchForm: FormGroup;

	bsConfig = { containerClass: 'theme-blue', dateInputFormat: 'YYYY-MM-DD' };
	constructor(
		public bsModalRef: BsModalRef,
		private apiService: ApiService,
		private store: StateStore<AppState>,
		private localeService: BsLocaleService,
		private router: Router
	) {}
	ngOnInit(): void {
		this.localeService.use('ru');
		switch (this.dataType) {
			case 'card':
				this.searchForm = new FormGroup({
					owner: new FormControl(''),
					number: new FormControl('')
				});
				break;
			case 'client':
				this.searchForm = new FormGroup({
					passport: new FormControl(''),
					name: new FormControl(''),
					surname: new FormControl(''),
					patronymic: new FormControl('')
				});
				break;
			case 'history':
				this.searchForm = new FormGroup({
					cardId: new FormControl(''),
					customerId: new FormControl(''),
					dates: new FormControl('')
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
		for (const param in params) {
			if (params[param] === '' && Object.prototype.hasOwnProperty.call(params, param)) {
				delete params[param];
			}
		}
		switch (this.dataType) {
			case 'client':
				this.router.navigate(['/clients'], {
					queryParams: params
				});
				this.store.dispatch(getClientsList({ parameters: params }));
				break;
			case 'card':
				this.router.navigate(['/cards'], {
					queryParams: params
				});
				this.store.dispatch(
					getCardList({
						parameters: params
					})
				);
				break;
			case 'history':
				if (params.dates) {
					params.startDateString = formatDate(params.dates[0], 'yyyy-MM-dd', 'en-US');
					params.endDateString = formatDate(params.dates[1], 'yyyy-MM-dd', 'en-US');
					delete params.dates;
				}
				this.router.navigate(['/history'], {
					queryParams: params
				});
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
