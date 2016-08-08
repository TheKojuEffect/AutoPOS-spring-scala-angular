import {Component} from '@angular/core';
import {BrandService} from './brand.service';
import 'rxjs/Rx';
import {Brand} from './brand';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-list',
    templateUrl: 'brand-list.comp.html',
    providers: [BrandService]
})
export class BrandListComp {
    brands: Brand[];

    constructor(private brandService: BrandService) {
    }

    public ngOnInit() {
        this.brandService.getBrands()
            .subscribe(brands => this.brands = brands)
    }

}