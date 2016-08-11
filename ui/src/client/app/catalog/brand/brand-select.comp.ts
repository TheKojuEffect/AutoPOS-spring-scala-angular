import {BrandService} from './brand.service';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Brand} from './brand';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-select',
    templateUrl: 'brand-select.html',
    providers: [BrandService]
})
export class BrandSelectComp implements OnInit {

    brands: Brand[];

    @Input()
    brandId: number;

    @Output()
    select = new EventEmitter<Brand>();

    constructor(private brandService: BrandService) {
    }

    ngOnInit() {
        this.brandService.getBrands()
            .subscribe(brands => this.brands = brands);
    }

    changeBrand(brandId: string) {
        let id = +brandId;
        let brand = this.brands.find(b => b.id === id);
        this.select.emit(brand);
    }

}