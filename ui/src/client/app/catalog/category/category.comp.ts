import {Component} from '@angular/core';
import {CategoryListComp} from './category-list.comp';
import {CategoryService} from './category.service';

@Component({
    moduleId: module.id,
    selector: 'pos-category',
    template: '<router-outlet></router-outlet>',
    directives: [CategoryListComp],
    providers: [CategoryService]
})
export class CategoryComp {
}