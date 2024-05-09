import { EventEmitter } from '@angular/core';
import { Ingridient } from "./ingridient.model"
export class ShopppingService {
        ingridients: Ingridient[] = [{ name: "apple", amount: 6 }, { name: "gul", amount: 16 }]
        updatedIngridients = new EventEmitter<Ingridient[]>()
        getIngridients() {
                return this.ingridients.slice()
        }
        addIngridient(el: Ingridient) {
                this.ingridients.push(el)
                this.updatedIngridients.emit(this.ingridients.slice())
        }
        addIngridients(data: Ingridient[]) {
                this.ingridients.push(...data)
                this.updatedIngridients.emit(this.ingridients.slice())
        }
}