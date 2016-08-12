import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ItemService} from './item.service';
import {BrandService} from '../brand/brand.service';
import {CategoryService} from '../category/category.service';

@Component({
    moduleId: module.id,
    selector: 'pos-item',
    template: '<router-outlet></router-outlet>',
    providers: [ItemService, BrandService, CategoryService]
})
export class ItemComp {
}