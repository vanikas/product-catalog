import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProductsComponent } from './dynamic-products.component';
import { EcommerceService } from '../../shared/service/ecommerce.service';
import { of } from 'rxjs';
import { Product } from '../../shared/model/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductCardComponent } from '../product-card/product-card.component';

describe('DynamicProductsComponent', () => {
  let component: DynamicProductsComponent;
  let fixture: ComponentFixture<DynamicProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DynamicProductsComponent, ProductCardComponent ],
      providers: [EcommerceService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicProductsComponent);
    component = fixture.componentInstance;
    component.productsList = mockProducts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all products', () => {
    spyOn(component.ecommerceService, 'getAllProducts').and.returnValue(of(mockProducts));
    component.getAllCategoriesProducts();
    expect(component.productsList).toEqual(mockProducts);
  })

  it('should sort by price', () => {
    component.sortByPrice();
    expect(component.productsList[1]).toEqual(mockProducts[1]);
  })
});

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches).",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
  },
  {
    category: "women's clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches).",
    id: 2,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 107.80,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  }
]

function except(arg0: Product) {
  throw new Error('Function not implemented.');
}
