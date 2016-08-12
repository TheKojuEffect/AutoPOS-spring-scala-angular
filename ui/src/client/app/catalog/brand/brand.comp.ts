import {Component} from '@angular/core';
import {BrandListComp} from './brand-list.comp';
import {BrandService} from './brand.service';

@Component({
    moduleId: module.id,
    selector: 'pos-brand',
    template: '<router-outlet></router-outlet>',
    directives: [BrandListComp],
    providers: [BrandService]
})
export class BrandComp {
}