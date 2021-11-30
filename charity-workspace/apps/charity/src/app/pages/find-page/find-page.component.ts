import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCardList, getClientList } from '../../state/actions/data-table.actions';
import { ApiService } from '../../services/api.service';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';
import { AppState } from 'src/app/state/app-state';
@Component({
	selector: 'app-find-page',
	templateUrl: './find-page.component.html',
	styleUrls: ['./find-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindPageComponent implements OnInit {
	cards$: Observable<readonly Card[]> = this.store.select('cards');
	clients$: Observable<readonly Client[]> = this.store.select('clients');
	cardKeys = ['Номер', 'Владелец', 'Магазин'];
	clientKeys = ['Номер паспорта', 'ФИО'];
	constructor(private store: Store<AppState>, private apiService: ApiService) {}
	ngOnInit(): void {
		this.apiService.getRequest('admin/card').subscribe((data: Card[]) => {
			this.store.dispatch(getCardList({ cards: data }));
		});
		this.apiService.getRequest('admin/owner').subscribe((data: Client[]) => {
			this.store.dispatch(getClientList({ clients: data }));
		});
	}
}
