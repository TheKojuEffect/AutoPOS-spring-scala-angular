import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Item} from './item';
import {Observable} from 'rxjs';

@Injectable()
export class ItemService {

    private baseUrl = 'http://localhost:8080/api/items';

    constructor(private http: Http) {
    }

    getItems(): Observable<Item[]> {
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

    getItem(id: number): Observable<Item> {
        return this.http.get(this.urlWithId(id))
            .map(res => res.json())
    }

    addItem(item: Item): Observable<Item> {
        return this.http.post(this.baseUrl, item)
            .map(res => res.json());
    }

    public updateItem(item: Item): Observable<Item> {
        let url = this.urlWithId(item.id);
        return this.http.put(url, item)
            .map(res => res.json());
    }

    public deleteItem(id: number): Observable<Response> {
        let url = this.urlWithId(id);
        return this.http.delete(url);
    }

    private urlWithId(id: number) {
        return this.baseUrl + "/" + id;
    }

}
