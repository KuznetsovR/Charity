import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from '../pages/add-page/add-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { HistoryPageComponent } from '../pages/history-page/history-page.component';
import { CardsPageComponent } from '../pages/cards-page/cards-page.component';
import { ClientsPageComponent } from '../pages/clients-page/clients-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/find',
		pathMatch: 'full'
	},
	{
		path: 'add',
		component: AddPageComponent
	},
	{
		path: 'cards',
		component: CardsPageComponent
	},
	{
		path: 'clients',
		component: ClientsPageComponent
	},
	{
		path: 'error',
		component: ErrorPageComponent
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
