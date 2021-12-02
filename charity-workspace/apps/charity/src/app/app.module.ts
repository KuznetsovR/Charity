import {LOCALE_ID, NgModule} from '@angular/core';
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
import { SearchModalComponent } from './components/search-modal/search-modal.component';
import { StoreModule } from '@ngrx/store';
import { cardsReducer } from './state/reducers/cards.reducer';
import { clientsReducer } from './state/reducers/clients.reducer';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { historyReducer } from './state/reducers/history.reducer';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

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
		DataTableComponent,
		SearchModalComponent,
		HistoryPageComponent,
		SuccessModalComponent
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
		PopoverModule.forRoot(),
		StoreModule.forRoot({ cards: cardsReducer, clients: clientsReducer, history: historyReducer }),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
			autoPause: true
		}),
		HttpClientModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
	bootstrap: [AppComponent]
})
export class AppModule {}
