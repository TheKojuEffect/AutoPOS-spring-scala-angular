import {Routes} from '@angular/router';
import {CatalogRoutes} from './catalog/catalog.routes';
import {DashRoutes} from './dash/dash.routes';

export const routes: Routes = [
    ...DashRoutes,
    ...CatalogRoutes
];