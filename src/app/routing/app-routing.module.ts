import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicProductsComponent } from '../pages/components/dynamic-products/dynamic-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/electronics',
    pathMatch: 'full',
  },
  { path: 'categories', component: DynamicProductsComponent },
  { path: 'mensclothing', component: DynamicProductsComponent },
  { path: 'womensclothing', component: DynamicProductsComponent },
  { path: 'jewelery', component: DynamicProductsComponent },
  { path: 'electronics', component: DynamicProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
