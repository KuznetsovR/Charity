import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card, Client } from '../../interfaces/interfaces';
@Component({
	selector: 'app-find-page',
	templateUrl: './find-page.component.html',
	styleUrls: ['./find-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindPageComponent {
	cards: Card[] = [
		{ number: 1231233219020193, owner: 'aboba mikhail petrovich', shop: 'pyaterochka', id: 123 },
		{ number: 1231233219020193, owner: 'aboba mikhail petrovich', shop: 'pyaterochka', id: 123 },
		{ number: 1231233219020193, owner: 'aboba mikhail petrovich', shop: 'pyaterochka', id: 123 },
		{ number: 1231233219020193, owner: 'aboba mikhail petrovich', shop: 'pyaterochka', id: 123 },
		{ number: 1231233219020193, owner: 'aboba mikhail petrovich', shop: 'pyaterochka', id: 123 },
		{ number: 1231233219020193, owner: 'aboba mikhail petrovich', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 },
		{ number: 123, owner: 'aboba', shop: 'pyaterochka', id: 123 }
	];
	clients: Client[] = [
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' },
		{ use_count: 10, patronymic: 'asd', surname: 'ewq', passport_number: 1020112342, name: 'string' }
	];
	cardKeys = ['Номер', 'Владелец', 'Магазин'];
	clientKeys = ['Номер паспорта', 'ФИО'];
}
