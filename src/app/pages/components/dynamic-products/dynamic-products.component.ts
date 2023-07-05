import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../shared/model/product';
import { EcommerceService } from '../../shared/service/ecommerce.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dynamic-products',
  templateUrl: './dynamic-products.component.html',
  styleUrls: ['./dynamic-products.component.css']
})
export class DynamicProductsComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<any> = new Subject<any>();
  productsList: Product[] = [];

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.getSelectedCategoryProducts();
  }

  // getting selected category from service file and calling respecgive api to get list of products
  getSelectedCategoryProducts() {
    let selectedCategory = '';
    this.ecommerceService.getSelectedCategory()
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(category => {
      selectedCategory = category;
      console.log('call');
      // to get all products of all categories
      if (selectedCategory === 'categories') {
        this.getAllCategoriesProducts();
      } else {
        // to get selected category product only
        this.getSelectedProductList(selectedCategory);
      }
    });
  }

  getAllCategoriesProducts() {
    this.ecommerceService.getAllProducts().subscribe((data) => {
      this.productsList = data;
    });
  }

  getSelectedProductList(selectedCategory: string) {
    this.ecommerceService.getProductsFromCategory(selectedCategory).subscribe((data) => {
      this.productsList = data;
    });
  }

  sortByPrice() {
    // by price
    this.productsList = this.productsList.sort((low, high) => low.price - high.price);
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }
}
