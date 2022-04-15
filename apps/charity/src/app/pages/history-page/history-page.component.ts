import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { HistoryAction } from '../../interfaces/historyAction';
import { AppState } from '../../state/app-state';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-history-page',
	templateUrl: './history-page.component.html',
	styleUrls: ['./history-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPageComponent  {
	history$: Observable<readonly HistoryAction[]> = this.store.select('history');
	historyKeys = ['Идентификатор', 'Дата', 'Карта', 'Благотворитель'];
	constructor(private apiService: ApiService, private store: Store<AppState>) {}
}
