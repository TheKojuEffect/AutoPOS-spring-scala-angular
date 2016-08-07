import {RouterConfig} from '@angular/router';
import {CatalogComp} from './index';
import {BrandRoutes} from './brand/brands.routes';
import {CategoriesRoutes} from './category/categories.routes';

export const CatalogRoutes: RouterConfig = [
    {
        path: 'catalog',
        component: CatalogComp,
        children: [
            {
                path: '',
                redirectTo: 'brands',
                pathMatch: 'full'
            },
            ...BrandRoutes,
            ...CategoriesRoutes
        ]
    }
];
