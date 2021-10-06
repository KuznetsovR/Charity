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
	image: string;
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
	cardNumber?: number;
	passportNumber?: number;
	name?: string;
	reason?: string;
	store?: string;
}
export interface Card {
	owner: number;
	number: number;
	shop: number;
	id: number;
}
export interface Client {
	use_count: number;
	patronymic: string;
	surname: string;
	passport_number: number;
	name: string;
}
