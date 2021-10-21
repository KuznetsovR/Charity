import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '../../interfaces/interfaces';

@Component({
	selector: 'app-found-card-modal',
	templateUrl: './found-card-modal.component.html',
	styleUrls: ['./found-card-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundCardModalComponent {
	data: Card;
}
