import { Client } from './client.entity';
import { Card } from './card.entity';
import { Store } from './store.entity';
import { HistoryAction } from './historyAction';

export type ResponseTypes = Client[] | Card[] | Store[] | HistoryAction[] | Client | Card | Store;
