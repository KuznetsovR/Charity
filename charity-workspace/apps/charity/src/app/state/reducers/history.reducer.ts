import { createReducer, on } from '@ngrx/store';
import { getHistoryError, getHistorySuccess } from '../actions/history.actions';
import { HistoryAction } from '../../interfaces/historyAction';

export const initialState: readonly HistoryAction[] = [];

export const historyReducer = createReducer<readonly HistoryAction[]>(
	initialState,
	on(getHistoryError, (state) => state),
	on(getHistorySuccess, (state, { history }) => history)
);
