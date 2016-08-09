import {CategoryService} from './category.service';
import {Component} from '@angular/core';
import {Category} from './category';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pos-category-add',
    templateUrl: 'category-form.comp.html'
})
export class CategoryAddComp {

    private title = 'Add Category';

    private category = new Category('', '');

    constructor(private categoryService: CategoryService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    submitCategory() {
        this.categoryService.addCategory(this.category)
            .subscribe(category => {
                this.router.navigate(['../', category.id], {relativeTo: this.route});
            });
    }
}