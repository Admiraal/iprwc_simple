import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
