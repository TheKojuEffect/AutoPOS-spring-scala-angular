import {APP_BASE_HREF} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {enableProdMode, PLATFORM_DIRECTIVES, provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './autopos.routes';
import {AutoposComp} from './autopos.comp';
import {HTTP_PROVIDERS, BaseRequestOptions, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';

if ('<%= ENV %>' === 'prod') {
    enableProdMode();
}

/**
 * Bootstraps the application and makes the ROUTER_PROVIDERS and the APP_BASE_HREF available to it.
 * @see https://angular.io/docs/ts/latest/api/platform-browser-dynamic/index/bootstrap-function.html
 */
bootstrap(AutoposComp, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    {
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    },
    {
        provide: PLATFORM_DIRECTIVES,
        useValue: [ROUTER_DIRECTIVES],
        multi: true
    }
]);
