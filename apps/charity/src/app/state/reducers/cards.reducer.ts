import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/interfaces/card.entity';
import { addCard, getCardListError, getCardListSuccess, removeCard } from '../actions/cards.actions';

export const initialState: readonly Card[] = [];

export const cardsReducer = createReducer<readonly Card[]>(
	initialState,
	on(getCardListError, (state) => state),
	on(getCardListSuccess, (state, { cards }) => cards),
	on(addCard, (state, { card }) => [...state, card]),
	on(removeCard, (state, { card }) => state.filter((el) => el.number !== card.number))
);
