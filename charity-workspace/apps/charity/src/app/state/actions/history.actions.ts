import { createAction, props } from '@ngrx/store';
import { HistoryAction } from '../../pages/history-page/historyAction';

export const getHistory = createAction(
	'[History/API] Retrieve history Success',
	props<{ history: readonly HistoryAction[] }>()
);
