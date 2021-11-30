import { createReducer, on } from '@ngrx/store';
import { getHistory } from '../actions/history.actions';
import { HistoryAction } from '../../pages/history-page/historyAction';

export const initialState: readonly HistoryAction[] = [];

export const historyReducer = createReducer(
	initialState,
	on(getHistory, (state, { history }) => history)
);
