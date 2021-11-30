import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';

export const getCardList = createAction('[Card List/API] Retrieve cards Success', props<{ cards: readonly Card[] }>());

export const getClientList = createAction(
	'[Client List/API] Retrieve clients Success',
	props<{ clients: readonly Client[] }>()
);

export const addClient = createAction('[Client List] Add client', props<{ client: Client }>());
export const removeClient = createAction('[Client List] Remove client', props<{ client: Client }>());
export const addCard = createAction('[Card List] Add card', props<{ card: Card }>());
export const removeCard = createAction('[Card List] Remove card', props<{ card: Card }>());
