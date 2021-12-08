import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, tap } from 'rxjs/operators';
import { Client } from '../interfaces/client.entity';
import { Card } from '../interfaces/card.entity';
import { Store } from '../interfaces/store.entity';
import { HistoryAction } from '../interfaces/historyAction';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
	private cache: Map<HttpRequest<null>, HttpResponse<Client | Card | Store | HistoryAction>> = new Map();
	intercept(req: HttpRequest<null>, next: HttpHandler): Observable<HttpEvent<Client | Card | Store | HistoryAction>> {
		if (req.method !== 'GET') {
			return next.handle(req);
		}
		if (req.headers.get('reset')) {
			this.cache.delete(req);
		}
		// change cache if it already exists
		const cachedResponse: HttpResponse<Client | Card | Store | HistoryAction> = this.cache.get(req);
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
