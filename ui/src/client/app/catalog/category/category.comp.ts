import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CategoryListComp} from './category-list.comp';
import {CategoryService} from './category.service';

@Component({
    moduleId: module.id,
    selector: 'pos-category',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES, CategoryListComp],
    providers: [CategoryService]
})
export class CategoryComp {
}