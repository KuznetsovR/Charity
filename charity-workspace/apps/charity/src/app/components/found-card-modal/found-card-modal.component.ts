import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { getCardList } from '../../state/actions/data-table.actions';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Card } from 'src/app/interfaces/card.entity';
import { FormControls } from '../form/form-entities';
import { Store as Shop } from 'src/app/interfaces/store.entity';
import { AppState } from '../../state/app-state';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
	selector: 'app-found-card-modal',
	templateUrl: './found-card-modal.component.html',
	styleUrls: ['./found-card-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundCardModalComponent implements OnInit {
	data: Card;
	dataState: 'changing' | 'static' = 'static';

	selectedStore: Shop;

	changeCardForm: FormGroup;
	number: FormControl;
	ownerId: FormControl;
	controls: FormControls = {};
	constructor(private store: Store<AppState>, private apiService: ApiService, private bsModalRef: BsModalRef) {}
	ngOnInit(): void {
		this.ownerId = new FormControl(this.data.owner.id, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
		this.controls.ownerId = this.ownerId;
		this.number = new FormControl(this.data.number, [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
		this.controls.number = this.number;
		this.changeCardForm = new FormGroup(this.controls);
		this.selectedStore = this.data.shop;
	}
	selectStore(store: Shop): void {
		this.selectedStore = store;
	}
	changeDataState(newState: 'changing' | 'static'): void {
		this.dataState = newState;
	}
	changeCard(): void {
		this.apiService
			.putRequest(`admin/card/put/${this.data.id}`, {
				owner: this.ownerId.value,
				number: this.number.value,
				shop: this.selectedStore.id,
				active: true
			})
			.pipe(
				mergeMap((res) => {
					this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
						this.store.dispatch(getCardList({ cards: data }));
					});
					return of(res);
				})
			)
			.subscribe();
		this.changeDataState('static');
	}
	deleteCard(): void {
		this.apiService
			.putRequest(`admin/card/put/${this.data.id}`, {
				owner: this.data.owner.id,
				number: this.data.number,
				shop: this.selectedStore.id,
				active: false
			})
			.pipe(
				mergeMap((res) => {
					this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
						this.store.dispatch(getCardList({ cards: data }));
					});
					return of(res);
				})
			)
			.subscribe();
	}
	closeModal(): void {
		this.bsModalRef.hide();
	}
}
