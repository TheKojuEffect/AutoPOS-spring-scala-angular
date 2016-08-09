import {CategoryService} from './category.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Category} from './category';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'pos-category-edit',
    templateUrl: 'category-form.comp.html'
})
export class CategoryEditComp implements OnInit, OnDestroy {

    private title = 'Edit Category';

    private category: Category;
    private sub: Subscription;

    constructor(private categoryService: CategoryService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let categoryId = +params['id'];
            this.categoryService.getCategory(categoryId)
                .subscribe(category => this.category = category);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        this.location.back();
    }


    submitCategory() {
        this.categoryService.updateCategory(this.category)
            .subscribe(category => {
                this.router.navigate(['../../', category.id], {relativeTo: this.route});
            });
    }

}