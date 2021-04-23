import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageRendererComponent } from './page-renderer/page-renderer.component';
import { ElementRendererComponent } from './element-renderer/element-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageRendererComponent,
    ElementRendererComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
