import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ingridient } from './ingridient.model';
import { ShopppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit{
  ingridients: Ingridient[]
  constructor(private shoppingService: ShopppingService) { }
  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngridients()
    this.shoppingService.updatedIngridients.subscribe((data: Ingridient[]) => this.ingridients = data
    )
  }

}
