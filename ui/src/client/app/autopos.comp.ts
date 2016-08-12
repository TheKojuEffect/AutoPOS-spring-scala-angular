import {Component} from '@angular/core';
import {Config} from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'autopos',
    templateUrl: 'autopos.comp.html'
})
export class AutoposComp {
    constructor() {
        console.log('Environment config', Config);
    }
}
