import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageRendererComponent } from './page-renderer/page-renderer.component';
import { ElementRendererComponent } from './element-renderer/element-renderer.component';
import { ElementOptionsComponent } from './element-options/element-options.component';
import { ActiveElementService } from './services/active-element.service';

@NgModule({
  declarations: [
    AppComponent,
    PageRendererComponent,
    ElementRendererComponent,
    ElementOptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActiveElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
