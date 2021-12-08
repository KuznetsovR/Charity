import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from '../pages/add-page/add-page.component';
import { FindPageComponent } from '../pages/find-page/find-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { HistoryPageComponent } from '../pages/history-page/history-page.component';

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
		path: 'find',
		component: FindPageComponent
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
		redirectTo: '/find'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
