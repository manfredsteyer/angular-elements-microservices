import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { registerAsCustomElements } from '@angular/elements';
import { ClientBComponent } from './client-b.component';
import { Page2Component } from './page2.component';

registerAsCustomElements([ClientBComponent], () =>
  platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' })
);
