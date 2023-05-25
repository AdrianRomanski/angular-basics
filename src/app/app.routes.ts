import {Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(x => x.AdminRoutes),
    providers: [importProvidersFrom(HttpClientModule)]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];
