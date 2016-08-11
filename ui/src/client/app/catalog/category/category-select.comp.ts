import {CategoryService} from './category.service';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from './category';

@Component({
    moduleId: module.id,
    selector: 'pos-category-select',
    templateUrl: 'category-select.html',
    providers: [CategoryService]
})
export class CategorySelectComp implements OnInit {

    categories: Category[];

    @Input()
    categoryId: number;

    @Output()
    select = new EventEmitter<Category>();

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categoryService.getCategories()
            .subscribe(categories => this.categories = categories);
    }

    changeCategory(categoryId: string) {
        let id = +categoryId;
        let category = this.categories.find(c => c.id === id);
        this.select.emit(category);
    }

}