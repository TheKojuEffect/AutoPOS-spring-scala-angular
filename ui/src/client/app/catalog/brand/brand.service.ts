import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Brand} from './brand';
import {Observable} from 'rxjs';

@Injectable()
export class BrandService {

    private baseUrl = 'http://localhost:8080/api/brands';

    constructor(private http: Http) {
    }

    getBrands(): Observable<Brand[]> {
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

    getBrand(id: number): Observable<Brand> {
        return this.http.get(this.urlWithId(id))
            .map(res => res.json())
    }

    addBrand(brand: Brand): Observable<Brand> {
        return this.http.post(this.baseUrl, brand)
            .map(res => res.json());
    }

    public updateBrand(brand: Brand): Observable<Brand> {
        let url = this.urlWithId(brand.id);
        return this.http.put(url, brand)
            .map(res => res.json());
    }

    public deleteBrand(id: number): Observable<Response> {
        let url = this.urlWithId(id);
        return this.http.delete(url);
    }

    private urlWithId(id: number) {
        return this.baseUrl + "/" + id;
    }

}
