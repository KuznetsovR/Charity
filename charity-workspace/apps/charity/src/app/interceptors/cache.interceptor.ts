import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, tap } from 'rxjs/operators';
import { ResponseTypes } from '../interfaces/response-types';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
	private cache: Map<HttpRequest<null>, HttpResponse<ResponseTypes>> = new Map();
	intercept(req: HttpRequest<null>, next: HttpHandler): Observable<HttpEvent<ResponseTypes>> {
		if (req.method !== 'GET') {
			return next.handle(req);
		}
		if (req.headers.get('reset')) {
			this.cache.delete(req);
		}
		// change cache if it already exists
		const cachedResponse: HttpResponse<ResponseTypes> = this.cache.get(req);
		if (cachedResponse) {
			return of(cachedResponse.clone());
		} else {
			return next.handle(req).pipe(
				tap((stateEvent) => {
					if (stateEvent instanceof HttpResponse && stateEvent.ok) {
						this.cache.set(req, stateEvent.clone());
					}
				}),
				share()
			);
		}
	}
}
