import { createReducer, on } from '@ngrx/store';
import { Client } from 'src/app/interfaces/client.entity';
import { addClient, getClientList, removeClient } from '../actions/clients.actions';

export const initialState: readonly Client[] = [];

export const clientsReducer = createReducer<readonly Client[]>(
	initialState,
	on(getClientList, (state, { clients }) => clients),
	on(addClient, (state, { client }) => [...state, client]),
	on(removeClient, (state, { client }) => state.filter((el) => el.passportNumber !== client.passportNumber))
);
