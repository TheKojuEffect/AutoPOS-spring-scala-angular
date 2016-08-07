import {RouterConfig} from '@angular/router';
import {BrandComp} from './brands.comp';
import {BrandListComp} from './brand-list.comp';

export const BrandRoutes: RouterConfig = [
    {
        path: 'brands',
        component: BrandComp,
        children: [
            {
                path: '',
                component: BrandListComp
            }
        ]
    }
];