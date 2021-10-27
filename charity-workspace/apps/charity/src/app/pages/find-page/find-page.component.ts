import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card, Client } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-find-page',
	templateUrl: './find-page.component.html',
	styleUrls: ['./find-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindPageComponent {
	cards$: Observable<Card[]> = this.store.select('cards');
	constructor(private store: Store<{ cards: Card[]; clients: Client[] }>) {}
	clients$: Observable<Client[]> = this.store.select('clients');
	cardKeys = ['Номер', 'Владелец', 'Магазин'];
	clientKeys = ['Номер паспорта', 'ФИО'];
}
