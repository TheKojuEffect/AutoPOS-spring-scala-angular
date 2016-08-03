import {provideRouter, RouterConfig} from '@angular/router';
import {CatalogRoutes} from './catalog/catalog.routes';

const routes: RouterConfig = [
    ...CatalogRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
];
