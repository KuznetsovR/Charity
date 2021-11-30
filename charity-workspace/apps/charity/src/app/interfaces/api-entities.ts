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
