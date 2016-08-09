import {RouterConfig} from '@angular/router';
import {BrandComp} from './index';
import {BrandListComp} from './brand-list.comp';
import {BrandDetailComp} from './brand-detail.comp';
import {BrandEditComp} from './brand-edit.comp';
import {BrandAddComp} from './brand-add.comp';

export const BrandRoutes: RouterConfig = [
    {
        path: 'brands',
        component: BrandComp,
        children: [
            {
                path: '',
                component: BrandListComp
            },
            {
                path: 'new',
                component: BrandAddComp
            },
            {
                path: ':id',
                component: BrandDetailComp
            },
            {
                path: ':id/edit',
                component: BrandEditComp
            }
        ]
    }
];