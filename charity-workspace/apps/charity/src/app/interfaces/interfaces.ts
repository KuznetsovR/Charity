import { AbstractControl } from '@angular/forms';
export interface Section {
	index: number;
	header: string;
	text?: string;
	images?: string[];
}
export interface Store {
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
