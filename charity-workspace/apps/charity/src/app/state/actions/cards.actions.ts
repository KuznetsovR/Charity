import { createAction, props } from '@ngrx/store';
import { Card } from '../../interfaces/card.entity';

export const getCardList = createAction('[Card List/API] Retrieve cards Success', props<{ cards: readonly Card[] }>());

export const addCard = createAction('[Card List] Add card', props<{ card: Card }>());
export const removeCard = createAction('[Card List] Remove card', props<{ card: Card }>());
