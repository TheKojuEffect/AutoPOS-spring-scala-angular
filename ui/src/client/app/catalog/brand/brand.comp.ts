import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BrandListComp} from './brand-list.comp';
import {BrandService} from './brand.service';

@Component({
    moduleId: module.id,
    selector: 'pos-brand',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES, BrandListComp],
    providers: [BrandService]
})
export class BrandComp {
}