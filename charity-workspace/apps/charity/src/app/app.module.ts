import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { RemovePageComponent } from './pages/remove-page/remove-page.component';
import { FindPageComponent } from './pages/find-page/find-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormComponent } from './components/form/form.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FoundCardModalComponent } from './components/found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from './components/found-client-modal/found-client-modal.component';
import { StoreSelectComponent } from './components/store-select/store-select.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
	declarations: [
		AppComponent,
		ProfilePageComponent,
		HeaderComponent,
		AddPageComponent,
		RemovePageComponent,
		FindPageComponent,
		FormComponent,
		ErrorPageComponent,
		FoundCardModalComponent,
		FoundClientModalComponent,
		StoreSelectComponent,
		DataTableComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ButtonsModule.forRoot(),
		ModalModule.forRoot(),
		BsDropdownModule.forRoot(),
		ReactiveFormsModule,
		TabsModule.forRoot(),
		BrowserModule,
		PopoverModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
