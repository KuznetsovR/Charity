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
	number: FormControl;
	ownerId: FormControl;
	controls: FormControls = {};
	ngOnInit(): void {
		this.ownerId = new FormControl(this.data.owner.id, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
		this.controls.ownerId = this.ownerId;
		this.number = new FormControl(this.data.number, [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
		this.controls.number = this.number;
		this.changeCardForm = new FormGroup(this.controls);
		this.selectedStore = { name: this.data.shop.name, id: this.data.shop.id };
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
				number: this.number.value,
				shop: this.selectedStore,
				active: true
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
		this.changeDataState('static');
	}
	deleteCard(): void {}
}
