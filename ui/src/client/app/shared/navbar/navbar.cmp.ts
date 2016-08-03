import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'apos-navbar',
    templateUrl: 'navbar.cmp.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarCmp {
}
