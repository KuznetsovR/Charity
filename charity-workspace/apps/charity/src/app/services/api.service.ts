// TODO: rewrite fetch to httpClient, promise to observable
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_PATH } from '../constants/api-path';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client.entity';
import { CardChangeDto } from '../interfaces/card-change.dto';
import { ResponseTypes } from '../interfaces/response-types';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	headers = {
		'Content-Type': 'application/json',
		Authorization: 'Basic YWRtaW46YWRtaW4='
	};

	constructor(private router: Router, private http: HttpClient) {}

	getRequest(path: string, parameters?): Observable<ResponseTypes> {
		let params = new HttpParams();
		if (parameters) {
			for (const param of Object.entries(parameters)) {
				if (param[1] && (typeof param[1] === 'string' || typeof param[1] === 'number')) {
					params = params.append(param[0], param[1]);
				}
			}
		}
		return this.http.get<ResponseTypes>(API_PATH + path, { headers: { ...this.headers, reset: 'true' }, params });
	}

	putRequest(path: string, newObject: Client | CardChangeDto): Observable<ResponseTypes> {
		return this.http.put<ResponseTypes>(API_PATH + path, newObject, { headers: this.headers });
	}

	postRequest(path: string, newObject: Client | CardChangeDto): Observable<ResponseTypes> {
		return this.http.post<ResponseTypes>(API_PATH + path, newObject, { headers: this.headers });
	}
}
