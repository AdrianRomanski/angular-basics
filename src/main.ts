import {enableProdMode, importProvidersFrom} from '@angular/core';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(AppRoutes))]
}).catch((err) => console.error(err));
