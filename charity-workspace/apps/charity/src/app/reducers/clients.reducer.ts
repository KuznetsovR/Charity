import { Client } from '../interfaces/interfaces';
import { createReducer, on } from '@ngrx/store';
import { addClient, getClientList, removeClient } from '../actions/data-table.actions';

export const initialState: readonly Client[] = [];

export const clientsReducer = createReducer(
	initialState,
	on(getClientList, (state, { clients }) => clients),
	on(addClient, (state, { client }) => [...state, client]),
	on(removeClient, (state, { client }) => state.filter((el) => el.passport_number !== client.passport_number))
);
