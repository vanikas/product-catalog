import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  apiRoutes = {
    allCategories: 'products/categories',
    productsFromCategory: 'products/category/',
    products: 'products'
  }
  constructor(private http: HttpClient) { }

  private behaviorSubject = new BehaviorSubject<string>('electronics');

  setRouteData(selectedCategory: string) {
    this.behaviorSubject.next(selectedCategory);
  }

  getSelectedCategory() {
    console.log('behaviour');
    return this.behaviorSubject.asObservable();
  }

  getAllCategories(): Observable<any> {
    return this.http.get(environment.baseUrl + this.apiRoutes.allCategories);
  }

  getProductsFromCategory(category: string): Observable<any> {
    return this.http.get(environment.baseUrl + this.apiRoutes.productsFromCategory + category);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(environment.baseUrl + this.apiRoutes.products);
  }

  sortByID(): Observable<any> {
    const httpparams = {
      'sort' : 'desc'
    };
    return this.http.get(environment.baseUrl + this.apiRoutes.products, { params: httpparams });
  }
}
