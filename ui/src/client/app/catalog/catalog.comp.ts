import {Component} from '@angular/core';
import {BrandComp} from './brand/brands.comp';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pos-catalog',
    templateUrl: 'catalog.comp.html',
    directives: [ROUTER_DIRECTIVES, BrandComp]

})
export class CatalogComp {

}