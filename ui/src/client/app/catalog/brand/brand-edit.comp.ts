import {BrandService} from './brand.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Brand} from './brand';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-edit',
    templateUrl: 'brand-form.comp.html'
})
export class BrandEditComp implements OnInit, OnDestroy {

    private title = 'Edit Brand';

    private brand: Brand;
    private sub: Subscription;

    constructor(private brandService: BrandService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let brandId = +params['id'];
            this.brandService.getBrand(brandId)
                .subscribe(brand => this.brand = brand);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        this.location.back();
    }


    submitBrand() {
        this.brandService.updateBrand(this.brand)
            .subscribe(brand => {
                this.router.navigate(['../../', brand.id], {relativeTo: this.route});
            });
    }

}