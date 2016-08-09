import {RouterConfig} from '@angular/router';
import {CategoryComp} from './index';
import {CategoryListComp} from './category-list.comp';
import {CategoryDetailComp} from './category-detail.comp';
import {CategoryEditComp} from './category-edit.comp';
import {CategoryAddComp} from './category-add.comp';

export const CategoryRoutes: RouterConfig = [
    {
        path: 'categories',
        component: CategoryComp,
        children: [
            {
                path: '',
                component: CategoryListComp
            },
            {
                path: 'new',
                component: CategoryAddComp
            },
            {
                path: ':id',
                component: CategoryDetailComp
            },
            {
                path: ':id/edit',
                component: CategoryEditComp
            }
        ]
    }
];