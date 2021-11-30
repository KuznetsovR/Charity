export interface RequestOptions {
	method: string;
	headers: HeadersInit;
	body?: string;
}
export interface RequestBody {
	id?: number;
	number?: number;
	owner?: number;
	name?: string;
	surname?: string;
	patronymic?: string;
	reason?: string;
	shop?: number;
	passportNumber?: string;
	active?: boolean;
	useCount?: number;
}
