// TODO: rewrite fetch to httpClient, promise to observable
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_PATH } from '../constants/api-path';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client.entity';
import { CardChangeDto } from '../interfaces/card-change.dto';
import { ResponseTypes } from '../interfaces/response-types';
import { QueryParameters } from '../interfaces/queryParameters';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	headers = {
		'Content-Type': 'application/json',
		Authorization: 'Basic YWRtaW46YWRtaW4='
	};
	lastParams = null;
	constructor(private router: Router, private http: HttpClient) {}

	getRequest(path: string, actionParameters?: QueryParameters, setNew?: boolean): Observable<ResponseTypes> {
		if (setNew === true) {
			this.lastParams = actionParameters;
		}
		// const parameters = { ...actionParameters };
		// for (const param in parameters) {
		// 	if (parameters[param] === '') {
		// 		delete parameters[param];
		// 	}
		// }
		console.log(actionParameters);
		const params = new HttpParams({ fromObject: this.lastParams });
		console.log(params);
		return this.http.get<ResponseTypes>(API_PATH + path, { headers: this.headers, params });
	}

	putRequest(path: string, newObject: Client | CardChangeDto): Observable<ResponseTypes> {
		return this.http.put<ResponseTypes>(API_PATH + path, newObject, { headers: this.headers });
	}

	postRequest(path: string, newObject: Client | CardChangeDto): Observable<ResponseTypes> {
		return this.http.post<ResponseTypes>(API_PATH + path, newObject, { headers: this.headers });
	}
}
