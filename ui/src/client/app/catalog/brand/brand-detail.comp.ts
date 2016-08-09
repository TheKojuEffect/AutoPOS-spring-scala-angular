import {Component, OnInit, OnDestroy} from '@angular/core';
import {BrandService} from './brand.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Brand} from './brand';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'pos-brand-detail',
    templateUrl: 'brand-detail.comp.html'
})
export class BrandDetailComp implements OnInit, OnDestroy {

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

    deleteBrand() {
        let confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            this.brandService.deleteBrand(this.brand.id)
                .subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
        }
    }

}