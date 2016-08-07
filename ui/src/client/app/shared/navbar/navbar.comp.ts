import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'pos-navbar',
    templateUrl: 'navbar.comp.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComp {
}
