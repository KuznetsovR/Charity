import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
	selector: 'app-find-page',
	templateUrl: './find-page.component.html',
	styleUrls: ['./find-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindPageComponent {
	cards = [
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka' }
	];
	cardKeys = ['number', 'owner', 'shop'];
}
