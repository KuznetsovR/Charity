import { Card } from '../interfaces/card.entity';
import { Client } from '../interfaces/client.entity';
import { HistoryAction } from '../pages/history-page/historyAction';

export interface AppState {
	cards: readonly Card[];
	clients: readonly Client[];
	history: readonly HistoryAction[];
}
