import { Component } from '@angular/core';
import { Ingridient } from './ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingridients: Ingridient[] = [{name: "apple",amount: 6}]
  onAddIng(event) {
  this.ingridients.push(event)
}
}
