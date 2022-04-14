import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardsResolver } from './resolvers/cards.resolver';
import { ClientsResolver } from './resolvers/clients.resolver';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	const routes: Routes = [
		{
			path: '',
			redirectTo: '/history',
			pathMatch: 'full'
		},
		{
			path: 'add',
			component: AddPageComponent
		},
		{
			path: 'cards',
			component: CardsPageComponent,
			resolve: {
				cards: CardsResolver
			}
		},
		{
			path: 'clients',
			component: ClientsPageComponent,
			resolve: {
				clients: ClientsResolver
			}
		},
		{
			path: 'client/:id',
			component: ClientPageComponent
		},
		{
			path: 'history',
			component: HistoryPageComponent
		}
	];

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [
				AppComponent,
				AddPageComponent,
				CardsPageComponent,
				ClientsPageComponent,
				ClientPageComponent,
				HistoryPageComponent
			],
			imports: [RouterModule.forRoot(routes)]
		});
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	it(`title has default value`, () => {
		expect(component.title).toEqual(`charity`);
	});
});
