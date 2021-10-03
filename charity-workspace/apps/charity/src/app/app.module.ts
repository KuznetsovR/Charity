import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SectionComponent } from './components/section/section.component';
import { GetCardModalComponent } from './components/get-card-modal/get-card-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BarcodeModalComponent } from './components/barcode-modal/barcode-modal.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { RemovePageComponent } from './pages/remove-page/remove-page.component';
import { FindCardPageComponent } from './pages/find-card-page/find-card-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormComponent } from './components/form/form.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FoundCardModalComponent } from './components/found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from './components/found-client-modal/found-client-modal.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		SectionComponent,
		GetCardModalComponent,
		BarcodeModalComponent,
		ProfilePageComponent,
		HeaderComponent,
		AddPageComponent,
		RemovePageComponent,
		FindCardPageComponent,
		FormComponent,
		ErrorPageComponent,
		FoundCardModalComponent,
		FoundClientModalComponent
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
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
