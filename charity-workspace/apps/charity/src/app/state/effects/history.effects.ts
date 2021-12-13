import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';
import { getHistory, getHistoryError, getHistorySuccess } from '../actions/history.actions';
import { HistoryAction } from '../../interfaces/historyAction';

@Injectable()
export class HistoryEffects {
	loadHistory$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getHistory),
			mergeMap((action) =>
				this.apiService.getRequest('admin/history', action.parameters, action.setNewParams).pipe(
					map((history: HistoryAction[]) => {
						console.log(123);
						return getHistorySuccess({ history });
					}),
					catchError(() => {
						const initialState: ModalOptions = {
							class: 'modal-dialog-centered',
							animated: true
						};
						this.modalService.show(ErrorModalComponent, initialState);
						return of(getHistoryError());
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private apiService: ApiService, private modalService: BsModalService) {}
}
