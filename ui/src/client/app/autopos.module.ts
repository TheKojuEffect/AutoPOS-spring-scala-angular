import {NgModule} from '@angular/core';
import {AutoposComp} from './autopos.comp';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {routes} from './autopos.routes';
import {HttpModule} from '@angular/http';
import {NavbarComp} from './shared/navbar/navbar.comp';
import {DashComp} from './dash/dash.comp';
import {ItemComp} from './catalog/item/item.comp';
import {BrandComp} from './catalog/brand/brand.comp';
import {CategoryComp} from './catalog/category/category.comp';
import {CategoryListComp} from './catalog/category/category-list.comp';
import {BrandListComp} from './catalog/brand/brand-list.comp';
import {ItemListComp} from './catalog/item/item-list.comp';
import {CategoryDetailComp} from './catalog/category/category-detail.comp';
import {CategoryAddComp} from './catalog/category/category-add.comp';
import {BrandAddComp} from './catalog/brand/brand-add.comp';
import {BrandDetailComp} from './catalog/brand/brand-detail.comp';
import {ItemAddComp} from './catalog/item/item-add.comp';
import {ItemDetailComp} from './catalog/item/item-detail.comp';
import {CategoryEditComp} from './catalog/category/category-edit.comp';
import {BrandEditComp} from './catalog/brand/brand-edit.comp';
import {ItemEditComp} from './catalog/item/item-edit.comp';
import {CatalogComp} from './catalog/catalog.comp';

@NgModule({
    declarations: [AutoposComp, NavbarComp, DashComp,
        CatalogComp,
        ItemComp,
        ItemListComp,
        ItemDetailComp,
        ItemAddComp,
        ItemEditComp,
        BrandComp,
        BrandListComp,
        BrandDetailComp,
        BrandAddComp,
        BrandEditComp,
        CategoryComp,
        CategoryListComp,
        CategoryDetailComp,
        CategoryAddComp,
        CategoryEditComp],
    imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule],
    bootstrap: [AutoposComp]
})
export class AutoposModule {
}