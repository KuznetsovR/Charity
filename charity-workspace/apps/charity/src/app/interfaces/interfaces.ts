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
	number?: number;
	owner?: number;
	name?: string;
	surname?: string;
	patronymic?: string;
	reason?: string;
	shop?: number;
	passport_number?: string;
}
export interface Card {
	owner: string;
	number: number;
	shop: string;
	id: number;
}
export interface Client {
	use_count: number;
	patronymic: string;
	surname: string;
	passport_number: number;
	name: string;
}
