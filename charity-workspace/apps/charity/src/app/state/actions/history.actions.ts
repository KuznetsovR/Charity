import { createAction, props } from '@ngrx/store';
import { HistoryAction } from '../../interfaces/historyAction';

export const getHistory = createAction(
	'[History/API] Retrieve history Success',
	props<{ history: readonly HistoryAction[] }>()
);
