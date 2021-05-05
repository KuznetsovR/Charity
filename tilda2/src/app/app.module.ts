import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageRendererComponent } from './page-renderer/page-renderer.component';
import { ElementRendererComponent } from './element-renderer/element-renderer.component';
import { ElementOptionsComponent } from './element-options/element-options.component';
import { ActiveElementService } from './services/active-element.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular//platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageRendererComponent,
    ElementRendererComponent,
    ElementOptionsComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [ActiveElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
