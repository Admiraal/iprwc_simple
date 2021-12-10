import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsComponent } from '../../products.component';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() public product: Product;
  @Input() public index: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
