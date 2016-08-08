import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class BrandService {

    private brandsApi = 'http://localhost:8080/api/brands';

    constructor(private http: Http) {
    }

    getBrands() {
        return this.http.get(this.brandsApi)
            .map(res => res.json());
    }

}
