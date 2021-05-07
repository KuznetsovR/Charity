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
import { TextBlockRendererComponent } from './element-renderer/block-renderers/text-block.renderer/text-block.renderer.component';
import { HeadingBlockRendererComponent } from './element-renderer/block-renderers/heading-block.renderer/heading-block.renderer.component';
import { SectionBlockRendererComponent } from './element-renderer/block-renderers/section-block.renderer/section-block.renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageRendererComponent,
    ElementRendererComponent,
    ElementOptionsComponent,
    TextBlockRendererComponent,
    HeadingBlockRendererComponent,
    SectionBlockRendererComponent,
    
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
