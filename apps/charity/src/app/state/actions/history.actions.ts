import { createAction, props } from '@ngrx/store';
import { HistoryAction } from '../../interfaces/historyAction';
import { QueryParameters } from '../../interfaces/queryParameters';

export const getHistory = createAction(
	'[History/API] Retrieve history',
	props<{ parameters: QueryParameters }>()
);
export const getHistorySuccess = createAction(
	'[History/API] Retrieve history success',
	props<{ history: readonly HistoryAction[] }>()
);
export const getHistoryError = createAction('[History/API] Retrieve history failed');
