import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { HistoryAction } from '../../interfaces/historyAction';
import { AppState } from '../../state/app-state';
import { Store } from '@ngrx/store';
import { getHistory } from '../../state/actions/history.actions';

@Component({
	selector: 'app-history-page',
	templateUrl: './history-page.component.html',
	styleUrls: ['./history-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPageComponent implements OnInit {
	history$: Observable<readonly HistoryAction[]> = this.store.select('history');
	historyKeys = ['Идентификатор', 'Дата', 'Карта', 'Владелец'];
	constructor(private apiService: ApiService, private store: Store<AppState>) {}
	ngOnInit(): void {
		this.apiService.getRequest('admin/history').subscribe((data: HistoryAction[]) => {
			this.store.dispatch(getHistory({ history: data }));
		});
	}
}
