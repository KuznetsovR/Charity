import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../interfaces/client.entity';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';

@Component({
	selector: 'app-clients-page',
	templateUrl: './clients-page.component.html',
	styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent {
	clients$: Observable<readonly Client[]> = this.store.select('clients');
	clientKeys = ['Номер паспорта', 'ФИО'];
	constructor(private store: Store<AppState>) {}
}
