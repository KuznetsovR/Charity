import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card, Client } from '../../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCardList, getClientList } from '../../actions/data-table.actions';
import { ApiService } from '../../services/api.service';
@Component({
	selector: 'app-find-page',
	templateUrl: './find-page.component.html',
	styleUrls: ['./find-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindPageComponent implements OnInit {
	cards$: Observable<Card[]> = this.store.select('cards');
	clients$: Observable<Client[]> = this.store.select('clients');
	cardKeys = ['Номер', 'Владелец', 'Магазин'];
	clientKeys = ['Номер паспорта', 'ФИО'];
	constructor(private store: Store<{ cards: Card[]; clients: Client[] }>, private apiService: ApiService) {}
	ngOnInit(): void {
		this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
			this.store.dispatch(getCardList({ cards: data }));
		});
		this.apiService.getRequest('admin/owner').subscribe((data: Client[]) => {
			this.store.dispatch(getClientList({ clients: data }));
		});
	}
}
