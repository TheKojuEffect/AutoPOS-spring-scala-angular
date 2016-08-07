import {provideRouter, RouterConfig} from '@angular/router';
import {CatalogRoutes} from './catalog/catalog.routes';
import {DashRoutes} from './dash/dash.routes';

const routes: RouterConfig = [
    ...DashRoutes,
    ...CatalogRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];
