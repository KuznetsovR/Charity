import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/interfaces/card.entity';
import { addCard, getCardList, removeCard } from '../actions/data-table.actions';

export const initialState: readonly Card[] = [];

export const cardsReducer = createReducer(
	initialState,
	on(getCardList, (state, { cards }) => cards),
	on(addCard, (state, { card }) => [...state, card]),
	on(removeCard, (state, { card }) => state.filter((el) => el.number !== card.number))
);
