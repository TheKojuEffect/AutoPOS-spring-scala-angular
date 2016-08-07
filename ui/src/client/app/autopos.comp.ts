import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {Config, NavbarCmp} from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'autopos',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'autopos.comp.html',
    directives: [ROUTER_DIRECTIVES, NavbarCmp]
})
export class AutoposCmp {
    constructor() {
        console.log('Environment config', Config);
    }
}
