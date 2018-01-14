import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientAComponent } from './client-a.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { PushPipe } from './push.pipe';
import { CustomHandlingStrategy } from "./url-handling.strategy";
import { ClientAWidgetComponent } from "./client-a-widget.component";

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'client-a/page1', component: Page1Component },
      { path: 'client-a/page2', component: Page2Component },
      { path: '**', component: Page1Component}
    ], { useHash: true })
  ],
  declarations: [
    ClientAComponent,
    Page1Component,
    Page2Component,
    ClientAWidgetComponent,
    PushPipe
  ],
  providers: [
    // { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ClientAComponent, ClientAWidgetComponent] 
})
export class AppModule {
  ngDoBootstrap() { }
}

