import { AbstractControl } from '@angular/forms';
export interface Section {
	index: number;
	header: string;
	text?: string;
	storesUrl?: string;
}
export interface Store {
	id: number;
	name: string;
}
export interface FormControls {
	[key: string]: AbstractControl;
}
export interface RequestOptions {
	method: string;
	headers: HeadersInit;
	body?: string;
}
export interface RequestBody {
	number?: number;
	owner?: number;
	name?: string;
	surname?: string;
	patronymic?: string;
	reason?: string;
	shop?: number;
	passportNumber?: string;
}
export interface Card {
	owner: Client;
	number: number;
	shop: Store;
	id: number;
}
export interface Client {
	id: number;
	active?: boolean;
	useCount: number;
	patronymic: string;
	surname: string;
	passportNumber: number;
	name: string;
}
export interface CardChangeDto {
	id: number;
	cardNumber: string;
	shop: number;
	owner: number;
	active: boolean;
}
export interface AppState {
	cardsData: readonly Card[];
	clientsData: readonly Client[];
}
