import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {Config, NavbarComp} from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'autopos',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'autopos.comp.html',
    directives: [ROUTER_DIRECTIVES, NavbarComp]
})
export class AutoposComp {
    constructor() {
        console.log('Environment config', Config);
    }
}
