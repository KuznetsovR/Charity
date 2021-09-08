import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SectionComponent } from './components/section/section.component';
import { GetCardModalComponent } from './components/get-card-modal/get-card-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BarcodeModalComponent } from './components/barcode-modal/barcode-modal.component';

@NgModule({
	declarations: [AppComponent, MainPageComponent, SectionComponent, GetCardModalComponent, BarcodeModalComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ButtonsModule.forRoot(),
		ModalModule.forRoot(),
		BsDropdownModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
