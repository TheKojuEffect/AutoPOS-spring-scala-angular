import {RouterConfig} from '@angular/router';
import {CatalogComp} from './index';
import {BrandRoutes} from './brand/index';
import {CategoryRoutes} from './category/category.routes';
import {ItemRoutes} from './item/item.routes';

export const CatalogRoutes: RouterConfig = [
    {
        path: 'catalog',
        component: CatalogComp,
        children: [
            {
                path: '',
                redirectTo: 'items',
                pathMatch: 'full'
            },
            ...ItemRoutes,
            ...BrandRoutes,
            ...CategoryRoutes
        ]
    }
];
