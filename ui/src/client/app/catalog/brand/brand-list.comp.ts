import {Component, OnInit} from '@angular/core';
import {BrandService} from './brand.service';
import 'rxjs/Rx';
import {Brand} from './brand';
import {Observable} from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-list',
    templateUrl: 'brand-list.comp.html'
})
export class BrandListComp implements OnInit {

    brands: Observable<Brand[]>;

    constructor(private brandService: BrandService) {
    }

    public ngOnInit() {
        this.brands = this.brandService.getBrands();
    }

}