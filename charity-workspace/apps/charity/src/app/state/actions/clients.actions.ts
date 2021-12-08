import { createAction, props } from '@ngrx/store';
import { Client } from '../../interfaces/client.entity';

export const getClientList = createAction(
	'[Client List/API] Retrieve clients Success',
	props<{ clients: readonly Client[] }>()
);

export const addClient = createAction('[Client List] Add client', props<{ client: Client }>());
export const removeClient = createAction('[Client List] Remove client', props<{ client: Client }>());
