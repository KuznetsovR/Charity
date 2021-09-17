import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { AddPageComponent } from '../pages/add-page/add-page.component';
import { RemovePageComponent } from '../pages/remove-page/remove-page.component';
import { FindCardPageComponent } from '../pages/find-card-page/find-card-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/main',
		pathMatch: 'full'
	},
	{
		path: 'main',
		component: MainPageComponent
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
		path: 'remove',
		component: RemovePageComponent
	},
	{
		path: 'find-card',
		component: FindCardPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
