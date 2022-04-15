import { createAction, props } from '@ngrx/store';
import { Card } from '../../interfaces/card.entity';
import { QueryParameters } from '../../interfaces/queryParameters';

export const getCardList = createAction(
	'[Card List/API] Retrieve cards',
	props<{ parameters: QueryParameters }>()
);
export const getCardListSuccess = createAction(
	'[Card List/API] Retrieve cards Success',
	props<{ cards: readonly Card[] }>()
);
export const getCardListError = createAction('[Card List/API] Retrieve cards failed');

export const addCard = createAction('[Card List] Add card', props<{ card: Card }>());
export const removeCard = createAction('[Card List] Remove card', props<{ card: Card }>());
