import {RouterConfig} from '@angular/router';
import {CatalogComp} from './index';
import {BrandRoutes} from './brand/index';
import {CategoriesRoutes} from './category/category.routes';

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
