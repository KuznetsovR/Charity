import { createReducer, on } from '@ngrx/store';
import { Client } from 'src/app/interfaces/client.entity';
import { addClient, getClientsListError, getClientsListSuccess, removeClient } from '../actions/clients.actions';

export const initialState: readonly Client[] = [];

export const clientsReducer = createReducer<readonly Client[]>(
	initialState,
	on(getClientsListError, (state) => state),
	on(getClientsListSuccess, (state, { clients }) => clients),
	on(addClient, (state, { clients }) => [...state, clients]),
	on(removeClient, (state, { clients }) => state.filter((el) => el.passportNumber !== clients.passportNumber))
);
