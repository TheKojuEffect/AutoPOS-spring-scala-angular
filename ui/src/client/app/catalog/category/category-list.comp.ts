import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import 'rxjs/Rx';
import {Category} from './category';
import {Observable} from 'rxjs';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pos-category-list',
    templateUrl: 'category-list.comp.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CategoryListComp implements OnInit {

    categories: Observable<Category[]>;

    constructor(private categoryService: CategoryService) {
    }

    public ngOnInit() {
        this.categories = this.categoryService.getCategories();
    }

}