import { Subscription } from 'rxjs';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from '../ingridient.model';
import { ShopppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{ 
  @ViewChild('f', {static: false}) shoppingForm: NgForm
  subscription: Subscription
  editMode = false
  editedNumberIndex: number
  editedItem: Ingridient
  constructor(private shoppingService: ShopppingService) { }
  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editMode = true
      this.editedNumberIndex = index
      console.log(this.editedNumberIndex);
      this.editedItem = this.shoppingService.getIngridient(index)
      this.shoppingForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    }) 
  }
  ngOnDestroy() {
    this.subscription.unsubscribe() 
  }
  onAdd(form: NgForm) {
    const value = form.value;
    const newEl = new Ingridient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingService.updateIngridient(this.editedNumberIndex, newEl)
    } else {

      this.shoppingService.addIngridient(newEl)
    }
    this.editMode = false
    form.reset()
  }
  onClear() {
    this.editMode = false
    this.shoppingForm.reset()
  }
  onDelete() {
    this.onClear()
    this.shoppingService.deleteIngridient(this.editedNumberIndex)
  }
}
