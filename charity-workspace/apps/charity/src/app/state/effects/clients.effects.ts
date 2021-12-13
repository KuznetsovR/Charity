import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';
import {getClientsListSuccess, getClientsList, getClientsListError} from '../actions/clients.actions';
import { Client } from '../../interfaces/client.entity';

@Injectable()
export class ClientsEffects {
	loadClients$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getClientsList),
			mergeMap((action) =>
				this.apiService.getRequest('admin/owner', action.parameters, action.setNewParams).pipe(
					map((clients: Client[]) => {
						return getClientsListSuccess({ clients });
					}),
					catchError(() => {
						const initialState: ModalOptions = {
							class: 'modal-dialog-centered',
							animated: true
						};
						this.modalService.show(ErrorModalComponent, initialState);
						return of(getClientsListError());
					})
				)
			)
		)
	);

	constructor(private actions$: Actions, private apiService: ApiService, private modalService: BsModalService) {}
}
