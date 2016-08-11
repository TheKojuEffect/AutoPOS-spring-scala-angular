import {Category} from '../category/category';
import {Brand} from '../brand/brand';
export class Item {

    public id: number;
    public code: string;
    public name: string;
    public description: string;
    public location: string;
    public quantity: number;
    public remarks: string;
    public markedPrice: number;
    public category: Category;
    public brand: Brand;
}