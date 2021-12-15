import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from '../pages/add-page/add-page.component';
import { HistoryPageComponent } from '../pages/history-page/history-page.component';
import { CardsPageComponent } from '../pages/cards-page/cards-page.component';
import { ClientsPageComponent } from '../pages/clients-page/clients-page.component';
import { CardsResolver } from '../resolvers/cards.resolver';
import { ClientsResolver } from '../resolvers/clients.resolver';

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
		path: 'history',
		component: HistoryPageComponent
	},
	{
		path: '**',
		redirectTo: '/history'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
