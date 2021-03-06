import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_PATH } from '../constants/api-path';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client.entity';
import { CardChangeDto } from '../interfaces/card-change.dto';
import { ResponseTypes } from '../interfaces/response-types';
import { QueryParameters } from '../interfaces/queryParameters';
import { Store } from '../interfaces/store.entity';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	headers = {
		'Content-Type': 'application/json',
		Authorization: 'Basic YWRtaW46YWRtaW4='
	};
	constructor(private router: Router, private http: HttpClient) {}

	getRequest(path: string, actionParameters?: QueryParameters): Observable<ResponseTypes> {
		const parameters = { ...actionParameters };
		const params = new HttpParams({ fromObject: parameters });
		return this.http.get<ResponseTypes>(API_PATH + path, { headers: this.headers, params });
	}

	putRequest(path: string, newObject: Client | CardChangeDto): Observable<ResponseTypes> {
		return this.http.put<ResponseTypes>(API_PATH + path, newObject, { headers: this.headers });
	}

	postRequest(path: string, newObject: Client | CardChangeDto): Observable<ResponseTypes> {
		return this.http.post<ResponseTypes>(API_PATH + path, newObject, { headers: this.headers });
	}
}
