import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BrandListComp} from './brand-list.comp';

@Component({
    moduleId: module.id,
    selector: 'pos-brands',
    templateUrl: 'brands.comp.html',
    directives: [ROUTER_DIRECTIVES, BrandListComp]
})
export class BrandComp {

}