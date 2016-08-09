import {Component, OnInit, OnDestroy} from '@angular/core';
import {CategoryService} from './category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Category} from './category';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'pos-category-detail',
    templateUrl: 'category-detail.comp.html'
})
export class CategoryDetailComp implements OnInit, OnDestroy {

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

    deleteCategory() {
        let confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            this.categoryService.deleteCategory(this.category.id)
                .subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
        }
    }

}