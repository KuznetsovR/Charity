import { createReducer, on } from '@ngrx/store';
import { addCard, getCardList, removeCard } from '../actions/data-table.actions';
import { Card } from '../interfaces/interfaces';

export const initialState: readonly Card[] = [];

export const cardsReducer = createReducer(
	initialState,
	on(getCardList, (state, { cards }) => cards),
	on(addCard, (state, { card }) => [...state, card]),
	on(removeCard, (state, { card }) => state.filter((el) => el.number !== card.number))
);
