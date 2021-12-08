import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { getCardList } from '../../state/actions/cards.actions';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/interfaces/card.entity';
import { FormControls } from '../form/form-entities';
import { Store as Shop } from 'src/app/interfaces/store.entity';
import { AppState } from '../../state/app-state';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Client } from '../../interfaces/client.entity';
import { ModalState } from '../../interfaces/modal-state.entity';
import { CardChangeDto } from '../../interfaces/card-change.dto';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
@Component({
	selector: 'app-found-card-modal',
	templateUrl: './found-card-modal.component.html',
	styleUrls: ['./found-card-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundCardModalComponent implements OnInit {
	data: Card;
	selectedStore: Shop;

	changeCardForm: FormGroup;
	number: FormControl;
	ownerId: FormControl;
	controls: FormControls = {};

	modalState: ModalState = {
		dataState: 'static',
		isRequestBad: false
	};
	constructor(
		private cdr: ChangeDetectorRef,
		private store: Store<AppState>,
		private apiService: ApiService,
		private bsModalRef: BsModalRef,
		private modalService: BsModalService
	) {}
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
		this.modalState.dataState = newState;
	}
	changeRequestCorrectnessState(newState: boolean): void {
		this.modalState.isRequestBad = newState;
	}
	change(): void {
		this.callAPI({
			owner: this.ownerId.value,
			number: this.number.value,
			shop: this.selectedStore.id,
			active: true
		}).subscribe(() => {
			this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
				this.store.dispatch(getCardList({ cards: data }));
			});
		});
		// this.apiService
		// 	.putRequest(`admin/card/put/${this.data.id}`, {
		// 		owner: this.ownerId.value,
		// 		number: this.number.value,
		// 		shop: this.selectedStore.id,
		// 		active: true
		// 	})
		// 	.pipe(
		// 		mergeMap((res) => {
		// 			this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
		// 				this.store.dispatch(getCardList({ cards: data }));
		// 			});
		// 			return of(res);
		// 		})
		// 	)
		// 	.subscribe();
		this.changeDataState('static');
	}
	delete(): void {
		this.callAPI({
			owner: this.data.owner.id,
			number: this.data.number,
			shop: this.data.shop.id,
			active: false
		}).subscribe(() => {
			this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
				this.store.dispatch(getCardList({ cards: data }));
			});
		});

		// this.apiService
		// 	.putRequest(`admin/card/put/${this.data.id}`, {
		// 		owner: this.data.owner.id,
		// 		number: this.data.number,
		// 		shop: this.data.shop.id,
		// 		active: false
		// 	})
		// 	.pipe(
		// 		mergeMap((res) => {
		// 			this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
		// 				this.store.dispatch(getCardList({ cards: data }));
		// 			});
		// 			return of(res);
		// 		})
		// 	)
		// 	.subscribe();
	}
	restore(): void {
		this.callAPI({
			owner: this.data.owner.id,
			number: this.data.number,
			shop: this.data.shop.id,
			active: true
		}).subscribe(() => {
			this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
				this.store.dispatch(getCardList({ cards: data }));
			});
		});
	}
	callAPI(newObject: CardChangeDto): Observable<Client> {
		return this.apiService.putRequest(`admin/card/put/${this.data.id}`, newObject).pipe(
			catchError((err) => {
				this.bsModalRef.hide();
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
