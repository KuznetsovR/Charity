import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card, Client, FormControls, Store as Shop } from '../../interfaces/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { getCardList } from '../../actions/data-table.actions';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';
@Component({
	selector: 'app-found-card-modal',
	templateUrl: './found-card-modal.component.html',
	styleUrls: ['./found-card-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundCardModalComponent implements OnInit {
	constructor(private store: Store<{ cards: Card[]; clients: Client[] }>, private apiService: ApiService) {}
	data: Card;
	dataState: 'changing' | 'static' = 'static';
	selectedStore: Shop;
	changeCardForm: FormGroup;
	cardNumber: FormControl;
	ownerId: FormControl;
	controls: FormControls = {};
	ngOnInit(): void {
		this.ownerId = new FormControl(this.data.owner, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
		this.controls.ownerId = this.ownerId;
		this.cardNumber = new FormControl(this.data.cardNumber, [
			Validators.required,
			Validators.pattern(/^\d{8,20}$/)
		]);
		this.controls.cardNumber = this.cardNumber;
		this.changeCardForm = new FormGroup(this.controls);
		this.selectedStore = { name: this.data.shop, id: 1, image: '123' };
	}
	selectStore(store: Shop): void {
		this.selectedStore = store;
	}
	changeDataState(newState: 'changing' | 'static'): void {
		this.dataState = newState;
	}
	changeCard(): void {
		this.apiService
			.putRequest('admin/card/put', {
				id: this.data.id,
				owner: this.data.owner,
				cardNumber: this.cardNumber.value,
				shop: this.selectedStore.name
			})
			.pipe(
				mergeMap((res) => {
					this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
						this.store.dispatch(getCardList({ cards: data }));
					});
					return res;
				})
			)
			.subscribe();
		this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
			this.store.dispatch(getCardList({ cards: data }));
		});
		this.changeDataState('static');
	}
	deleteCard(): void {}
}
