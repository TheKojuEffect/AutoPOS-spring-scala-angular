import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AutoposModule} from './autopos.module';

if ('<%= ENV %>' === 'prod') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AutoposModule);