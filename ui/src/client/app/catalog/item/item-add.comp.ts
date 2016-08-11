import {ItemService} from './item.service';
import {Component} from '@angular/core';
import {Item} from './item';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {BrandService} from '../brand/brand.service';
import {CategoryService} from '../category/category.service';
import {Brand} from '../brand/brand';
import {Observable} from 'rxjs';
import {Category} from '../category/category';
import {BrandSelectComp} from '../brand/brand-select.comp';
import {CategorySelectComp} from '../category/category-select.comp';

@Component({
    moduleId: module.id,
    selector: 'pos-item-add',
    templateUrl: 'item-form.comp.html',
    directives: [BrandSelectComp, CategorySelectComp]
})
export class ItemAddComp {

    private title = 'Add Item';

    private item = new Item();
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
        this.brands = this.brandService.getBrands();
        this.categories = this.categoryService.getCategories();
    }

    goBack() {
        this.location.back();
    }

    submitItem() {
        this.itemService.addItem(this.item)
            .subscribe(item => {
                this.router.navigate(['../', item.id], {relativeTo: this.route});
            });
    }
}