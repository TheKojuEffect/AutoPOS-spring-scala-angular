import {Component, OnInit, OnDestroy} from '@angular/core';
import {ItemService} from './item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Item} from './item';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'pos-item-detail',
    templateUrl: 'item-detail.comp.html'
})
export class ItemDetailComp implements OnInit, OnDestroy {

    private item: Item;
    private sub: Subscription;

    constructor(private itemService: ItemService,
                private router: Router,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let itemId = +params['id'];
            this.itemService.getItem(itemId)
                .subscribe(item => this.item = item);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        this.location.back();
    }

    deleteItem() {
        let confirmDelete = confirm("Are you sure you want to delete?");
        if (confirmDelete) {
            this.itemService.deleteItem(this.item.id)
                .subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
        }
    }

}