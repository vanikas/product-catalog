import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from '../../shared/service/ecommerce.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoriesList: string[] = [];
  active = 0;
  routeLink: string = '';

  constructor(private ecommerceService: EcommerceService, private route: Router) { }

  ngOnInit(): void {
    this.getAllCategoriesList();
  }


  getAllCategoriesList() {
    this.ecommerceService.getAllCategories().subscribe(data => {
      this.categoriesList = data;
    });
  }

  // Function is to highlight the selected category and calling router link
  selectCategory(selectedCategory: string, index: number) {
    this.active = index;
    this.routeLink = selectedCategory.replace(/[^A-Z0-9]+/ig, "");
    this.route.navigate([this.routeLink]);
    this.ecommerceService.setRouteData(this.routeLink);
  }
}
