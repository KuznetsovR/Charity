import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { AddPageComponent } from '../pages/add-page/add-page.component';
import { FindPageComponent } from '../pages/find-page/find-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/profile',
		pathMatch: 'full'
	},
	{
		path: 'profile',
		component: ProfilePageComponent
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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
