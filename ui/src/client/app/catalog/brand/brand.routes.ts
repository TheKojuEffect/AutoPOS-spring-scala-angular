import {RouterConfig} from '@angular/router';
import {BrandComp} from './index';
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