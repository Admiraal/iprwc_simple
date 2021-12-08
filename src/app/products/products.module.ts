import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductListItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
})
export class ProductsModule { }
