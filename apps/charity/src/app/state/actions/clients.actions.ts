import { createAction, props } from '@ngrx/store';
import { Client } from '../../interfaces/client.entity';
import { QueryParameters } from '../../interfaces/queryParameters';

export const getClientsList = createAction(
	'[Client List/API] Retrieve clients',
	props<{ parameters: QueryParameters; setNewParams: boolean }>()
);
export const getClientsListSuccess = createAction(
	'[Client List/API] Retrieve clients Success',
	props<{ clients: readonly Client[] }>()
);
export const getClientsListError = createAction('[Client List/API] Retrieve clients failed');

export const addClient = createAction('[Client List] Add client', props<{ clients: Client }>());
export const removeClient = createAction('[Client List] Remove client', props<{ clients: Client }>());
