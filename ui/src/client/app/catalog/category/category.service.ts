import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Category} from './category';
import {Observable} from 'rxjs';

@Injectable()
export class CategoryService {

    private baseUrl = 'http://localhost:8080/api/categories';

    constructor(private http: Http) {
    }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

    getCategory(id: number): Observable<Category> {
        return this.http.get(this.urlWithId(id))
            .map(res => res.json())
    }

    addCategory(category: Category): Observable<Category> {
        return this.http.post(this.baseUrl, category)
            .map(res => res.json());
    }

    public updateCategory(category: Category): Observable<Category> {
        let url = this.urlWithId(category.id);
        return this.http.put(url, category)
            .map(res => res.json());
    }

    public deleteCategory(id: number): Observable<Response> {
        let url = this.urlWithId(id);
        return this.http.delete(url);
    }

    private urlWithId(id: number) {
        return this.baseUrl + "/" + id;
    }

}
