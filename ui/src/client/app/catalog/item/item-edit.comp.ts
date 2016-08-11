import {ItemService} from './item.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Item} from './item';
import {Subscription, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CategoryService} from '../category/category.service';
import {BrandService} from '../brand/brand.service';
import {Category} from '../category/category';
import {Brand} from '../brand/brand';
import {BrandSelectComp} from '../brand/brand-select.comp';
import {CategorySelectComp} from '../category/category-select.comp';

@Component({
    moduleId: module.id,
    selector: 'pos-item-edit',
    templateUrl: 'item-form.comp.html',
    directives: [BrandSelectComp, CategorySelectComp]
})
export class ItemEditComp implements OnInit, OnDestroy {

    private title = 'Edit Item';

    private item: Item;
    private sub: Subscription;
    private brands: Observable<Brand[]>;
    private categories: Observable<Category[]>;

    constructor(private itemService: ItemService,
                private brandService: BrandService,
                private categoryService: CategoryService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let itemId = +params['id'];
            this.itemService.getItem(itemId)
                .subscribe(item => this.item = item);
        });
        this.brands = this.brandService.getBrands();
        this.categories = this.categoryService.getCategories();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        this.location.back();
    }


    submitItem() {
        this.itemService.updateItem(this.item)
            .subscribe(item => {
                this.router.navigate(['../../', item.id], {relativeTo: this.route});
            });
    }

}