import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { getCardList, getCardListError, getCardListSuccess } from '../actions/cards.actions';
import { Card } from '../../interfaces/card.entity';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';

@Injectable()
export class CardsEffects {
	loadCards$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getCardList),
			mergeMap((action) =>
				this.apiService.getRequest('admin/card', action.parameters, action.setNewParams).pipe(
					map((cards: Card[]) => {
						return getCardListSuccess({ cards });
					}),
					catchError(() => {
						const initialState: ModalOptions = {
							class: 'modal-dialog-centered',
							animated: true
						};
						this.modalService.show(ErrorModalComponent, initialState);
						return of(getCardListError());
					})
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private apiService: ApiService,
		private modalService: BsModalService
	) {}
}
