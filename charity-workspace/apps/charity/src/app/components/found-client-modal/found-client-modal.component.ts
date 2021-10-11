import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Client } from '../../interfaces/interfaces';

@Component({
	selector: 'app-found-client-modal',
	templateUrl: './found-client-modal.component.html',
	styleUrls: ['./found-client-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundClientModalComponent {
	clients: Client[];
}
