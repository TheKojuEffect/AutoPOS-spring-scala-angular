import {RouterConfig} from '@angular/router';
import {ItemComp} from './index';
import {ItemListComp} from './item-list.comp';
import {ItemDetailComp} from './item-detail.comp';
import {ItemEditComp} from './item-edit.comp';
import {ItemAddComp} from './item-add.comp';

export const ItemRoutes: RouterConfig = [
    {
        path: 'items',
        component: ItemComp,
        children: [
            {
                path: '',
                component: ItemListComp
            },
            {
                path: 'new',
                component: ItemAddComp
            },
            {
                path: ':id',
                component: ItemDetailComp
            },
            {
                path: ':id/edit',
                component: ItemEditComp
            }
        ]
    }
];