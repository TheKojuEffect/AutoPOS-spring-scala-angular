import {BrandService} from './brand.service';
import {Component} from '@angular/core';
import {Brand} from './brand';
import {Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-add',
    templateUrl: 'brand-form.comp.html'
})
export class BrandAddComp {

    private title = 'Add Brand';

    private brand = new Brand('');

    constructor(private brandService: BrandService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
    }

    goBack() {
        this.location.back();
    }

    submitBrand() {
        this.brandService.addBrand(this.brand)
            .subscribe(brand => {
                this.router.navigate(['../', brand.id], {relativeTo: this.route});
            });
    }
}