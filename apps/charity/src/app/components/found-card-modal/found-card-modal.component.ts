import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { getCardList } from '../../state/actions/cards.actions';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/interfaces/card.entity';
import { Store as Shop } from 'src/app/interfaces/store.entity';
import { AppState } from '../../state/app-state';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Client } from '../../interfaces/client.entity';
import { ModalState } from '../../interfaces/modal-state.entity';
import { CardChangeDto } from '../../interfaces/card-change.dto';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
	selector: 'app-found-card-modal',
	templateUrl: './found-card-modal.component.html',
	styleUrls: ['./found-card-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundCardModalComponent implements OnInit {
	data: Card;
	selectedStore: Shop;

	clientId: string;

	changeCardForm: FormGroup;
	modalState: ModalState = {
		dataState: 'static',
		isRequestBad: false
	};
	constructor(
		private cdr: ChangeDetectorRef,
		private store: Store<AppState>,
		private apiService: ApiService,
		private bsModalRef: BsModalRef,
		private modalService: BsModalService,
		private route: ActivatedRoute
	) {}
	ngOnInit(): void {
		this.route.firstChild.params.subscribe((params: Params) => {
			if (params.id !== null && params.id !== undefined) {
				this.clientId = params.id;
			}
		});
		this.changeCardForm = new FormGroup({
			ownerId: new FormControl(this.data.owner.id, [Validators.required, Validators.pattern(/^\d+$/i)]),
			number: new FormControl(this.data.number, [Validators.required, Validators.pattern(/^[A-Za-z\d]+$/)])
		});
		this.selectedStore = this.data.shop;
	}
	selectStore(store: Shop): void {
		this.selectedStore = store;
	}
	changeDataState(newState: 'changing' | 'static'): void {
		this.modalState.dataState = newState;
	}
	change(): void {
		if (this.changeCardForm.invalid) {
			this.modalState.isRequestBad = true;
			return;
		}
		this.callAPI({
			owner: this.changeCardForm.controls.ownerId.value,
			number: this.changeCardForm.controls.number.value,
			shop: this.selectedStore.id,
			active: true
		}).subscribe(() => {
			this.updateCards();
		});

		this.changeDataState('static');
	}
	delete(): void {
		this.data = {
			...this.data,
			active: false
		};

		this.callAPI({
			owner: this.data.owner.id,
			number: this.data.number,
			shop: this.data.shop.id,
			active: false
		}).subscribe(() => {
			this.updateCards();
		});
	}
	restore(): void {
		this.data = {
			...this.data,
			active: true
		};
		this.callAPI({
			owner: this.data.owner.id,
			number: this.data.number,
			shop: this.data.shop.id,
			active: true
		}).subscribe(() => {
			this.updateCards();
		});
	}
	callAPI(newObject: CardChangeDto): Observable<Client> {
		return this.apiService.putRequest(`admin/card/${this.data.id}`, newObject).pipe(
			catchError((err) => {
				this.bsModalRef.hide();
				if (err.error.error === 'Bad Request') {
					this.modalState.isRequestBad = true;
					this.cdr.detectChanges();
				} else {
					this.bsModalRef.hide();
					const initialState: ModalOptions = {
						class: 'modal-dialog-centered',
						animated: true
					};
					this.modalService.show(ErrorModalComponent, initialState);
				}
				return of(err);
			})
		);
	}
	updateCards(): void {
		if (this.clientId !== null && this.clientId !== undefined) {
			this.store.dispatch(getCardList({ parameters: { owner: this.clientId } }));
		} else {
			this.store.dispatch(getCardList({ parameters: {} }));
		}
	}
	closeModal(): void {
		this.bsModalRef.hide();
	}
}
