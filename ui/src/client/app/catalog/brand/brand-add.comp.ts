import {BrandService} from './brand.service';
import {Component} from '@angular/core';
import {Brand} from './brand';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-add',
    templateUrl: 'brand-form.comp.html'
})
export class BrandAddComp {
    private brand = new Brand('');

    constructor(private brandService: BrandService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    submitBrand() {
        this.brandService.addBrand(this.brand)
            .subscribe(brand => {
                this.router.navigate(['../', brand.id], {relativeTo: this.route});
            });
    }
}