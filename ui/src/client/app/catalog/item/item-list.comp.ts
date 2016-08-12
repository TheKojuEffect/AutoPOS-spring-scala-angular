import {Component, OnInit} from '@angular/core';
import {ItemService} from './item.service';
import 'rxjs/Rx';
import {Item} from './item';
import {Observable} from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'pos-item-list',
    templateUrl: 'item-list.comp.html'
})
export class ItemListComp implements OnInit {

    items: Observable<Item[]>;

    constructor(private itemService: ItemService) {
    }

    public ngOnInit() {
        this.items = this.itemService.getItems();
    }
}