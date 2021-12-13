import { createReducer, on } from '@ngrx/store';
import { getHistory } from '../actions/history.actions';
import { HistoryAction } from '../../interfaces/historyAction';

export const initialState: readonly HistoryAction[] = [];

export const historyReducer = createReducer<readonly HistoryAction[]>(
	initialState,
	on(getHistory, (state, { history }) => history)
);
