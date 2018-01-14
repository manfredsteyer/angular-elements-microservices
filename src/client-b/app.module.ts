import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientBComponent } from './client-b.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { PushPipe } from './push.pipe';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'client-b/page1', component: Page1Component },
      { path: 'client-b/page2', component: Page2Component },
      { path: '**', component: Page1Component}
    ], { useHash: true })
  ],
  declarations: [
    ClientBComponent,
    Page1Component,
    Page2Component,
    PushPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ClientBComponent] 
})
export class AppModule {
  ngDoBootstrap() { }
}