import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from '../ingridient.model';
import { ShopppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput', {static: false}) nameInputLink: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputLink: ElementRef;
  constructor(private shoppingService: ShopppingService) { }
  ngOnInit(): void {
  }
  onAdd() {
    const nameValue = this.nameInputLink.nativeElement.value
    const amountValue = this.amountInputLink.nativeElement.value
    const newEl = new Ingridient(nameValue, amountValue)
    this.shoppingService.addIngridient(newEl)
  }

}
