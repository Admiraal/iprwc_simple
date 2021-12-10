import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { ShoppingcartService } from '../../shoppingcart.service';

@Component({
  selector: 'app-shoppingcart-list-item',
  templateUrl: './shoppingcart-list-item.component.html',
  styleUrls: ['./shoppingcart-list-item.component.scss']
})
export class ShoppingcartListItemComponent implements OnInit {

  @Output() public remove: EventEmitter<number> = new EventEmitter<number>(); 
  @Input('index') public index: number;
  @Input('product') public product: Product;

  constructor(private cartService: ShoppingcartService) { }

  ngOnInit(): void {
  }

  public onRemoveFromCart(): void{
    this.remove.emit(this.index);
  }
}
