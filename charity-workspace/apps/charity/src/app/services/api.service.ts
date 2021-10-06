// TODO: rewrite fetch to httpClient, promise to observable
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestBody, RequestOptions } from '../interfaces/interfaces';
import { API_PATH } from '../constants/api-path';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	headers = {
		'Content-Type': 'application/json'
	};

	constructor(private router: Router) {}

	async doRequest(path: string, options: RequestOptions): Promise<any> {
		const response = await fetch(API_PATH + path, options);
		if (response.ok) {
			return response.json();
		} else {
			if (response.status === 400 || response.status === 403 || response.status === 404) {
				await this.router.navigate(['/error']);
			}
			throw new Error(response.statusText);
		}
	}

	getRequest(path: string): Promise<any> {
		return this.doRequest(path, {
			method: 'GET',
			headers: this.headers
		});
	}

	postRequest(path: string, body: RequestBody): Promise<any> {
		return this.doRequest(path, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(body)
		});
	}

	deleteRequest(path: string, body: RequestBody): Promise<any> {
		return this.doRequest(path, {
			method: 'DELETE',
			headers: this.headers,
			body: JSON.stringify(body)
		});
	}
}
