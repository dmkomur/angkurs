import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Ingridient } from './ingridient.model';
import { ShopppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingridients: Ingridient[]
  private ingSubscription: Subscription
  constructor(private shoppingService: ShopppingService) { }
  ngOnInit(): void {
    this.ingridients = this.shoppingService.getIngridients()
    this.ingSubscription = this.shoppingService.updatedIngridients.subscribe((data: Ingridient[]) => this.ingridients = data
    )
  }
ngOnDestroy(): void {
  this.ingSubscription.unsubscribe()
}
}
