import {Component, OnInit} from '@angular/core';
import {BrandService} from './brand.service';
import 'rxjs/Rx';
import {Brand} from './brand';
import {Observable} from 'rxjs';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-list',
    templateUrl: 'brand-list.comp.html',
    directives: [ROUTER_DIRECTIVES]
})
export class BrandListComp implements OnInit {

    brands: Observable<Brand[]>;

    constructor(private brandService: BrandService) {
    }

    public ngOnInit() {
        this.brands = this.brandService.getBrands();
    }

}