import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../api/group';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getGroupList() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Group[])
            .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Group[])
            .then(data => data);
    }


    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Group[])
            .then(data => data);
    }
}
