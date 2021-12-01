import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store as StateStore } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { getCardList, getClientList } from '../../state/actions/data-table.actions';
import { ApiService } from '../../services/api.service';
import { Store } from 'src/app/interfaces/store.entity';
import { FormControls } from '../form/form-entities';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';

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
	constructor(
		public bsModalRef: BsModalRef,
		private apiService: ApiService,
		private store: StateStore<{ cards: Card[]; clients: Client[] }>
	) {}
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
				this.apiService.getRequest('admin/owner', this.searchForm.value).subscribe((data: Client[]) => {
					this.store.dispatch(getClientList({ clients: data }));
				});
				break;
			case 'card':
				this.apiService.getRequest('admin/card', this.searchForm.value).subscribe((data: Card[]) => {
					this.store.dispatch(getCardList({ cards: data }));
				});
				break;
			case 'history':
				// this.apiService.getRequest('admin/history', this.searchForm.value).subscribe((data: HistoryAction[]) => {
				//   this.store.dispatch(getCardList({ cards: data }));
				// });
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
