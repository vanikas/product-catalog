import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/components/category/category.component';
import { DynamicProductsComponent } from './pages/components/dynamic-products/dynamic-products.component';
import { NavHeaderComponent } from './pages/shared/components/nav-header/nav-header.component';
import { AppRoutingModule } from './route/app-routing.module';
import { ProductCardComponent } from './pages/components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DynamicProductsComponent,
    NavHeaderComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
