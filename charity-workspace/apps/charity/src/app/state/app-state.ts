import { Card } from '../interfaces/card.entity';
import { Client } from '../interfaces/client.entity';

export interface AppState {
	cardsData: readonly Card[];
	clientsData: readonly Client[];
}
