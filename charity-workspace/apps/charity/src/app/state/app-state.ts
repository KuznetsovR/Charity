import { Card } from '../interfaces/card.entity';
import { Client } from '../interfaces/client.entity';

export interface AppState {
	cards: readonly Card[];
	clients: readonly Client[];
}
