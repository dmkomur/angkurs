import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingridient } from '../ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputLink: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputLink: ElementRef;
  @Output() addIngridient = new EventEmitter<Ingridient>()

  onAdd() {
    const nameValue = this.nameInputLink.nativeElement.value
    const amountValue = this.amountInputLink.nativeElement.value
    const newEl = new Ingridient(nameValue, amountValue)
    this.addIngridient.emit(newEl)
  }

}
