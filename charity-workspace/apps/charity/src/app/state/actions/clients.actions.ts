import { createAction, props } from '@ngrx/store';
import { Client } from '../../interfaces/client.entity';
import { QueryParameters } from '../../interfaces/queryParameters';

export const getClientList = createAction(
	'[Client List/API] Retrieve clients',
	props<{ parameters: QueryParameters; setNewParams: boolean }>()
);
export const getClientListSuccess = createAction(
	'[Client List/API] Retrieve clients Success',
	props<{ cards: readonly Client[] }>()
);
export const getClientListError = createAction('[Client List/API] Retrieve clients failed');

export const addClient = createAction('[Client List] Add client', props<{ client: Client }>());
export const removeClient = createAction('[Client List] Remove client', props<{ client: Client }>());
