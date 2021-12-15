import { Client } from './client.entity';
import { Store } from './store.entity';

export interface Card {
	active: boolean;
	owner: Client;
	number: string;
	shop: Store;
	id: number;
}
