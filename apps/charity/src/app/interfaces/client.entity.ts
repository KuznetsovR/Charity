export interface Client {
	id?: number;
	active?: boolean;
	useCount: number;
	patronymic: string;
	surname: string;
	passportNumber: number;
	name: string;
}
