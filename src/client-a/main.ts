import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { registerAsCustomElements } from '@angular/elements';
import { ClientAComponent } from './client-a.component';
import { Page2Component } from './page2.component';
import { ClientAWidgetComponent } from "./client-a-widget.component";

registerAsCustomElements([ClientAComponent, ClientAWidgetComponent], () =>
  platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
);
