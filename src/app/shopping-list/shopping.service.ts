import { Ingridient } from "./ingridient.model"
import { Subject } from 'rxjs';
export class ShopppingService {
        ingridients: Ingridient[] = [{ name: "apple", amount: 6 }, { name: "gul", amount: 16 }]
        updatedIngridients = new Subject<Ingridient[]>()
        startedEditing = new Subject<Number>()
        getIngridients() {
                return this.ingridients.slice()
        }
        getIngridient(index: number) {
                return this.ingridients[index]
        }
        addIngridient(el: Ingridient) {
                this.ingridients.push(el)
                this.updatedIngridients.next(this.ingridients.slice())
        }
        addIngridients(data: Ingridient[]) {
                this.ingridients.push(...data)
                this.updatedIngridients.next(this.ingridients.slice())
        }
        updateIngridient(index: number, ingridient: Ingridient) {
                this.ingridients[index] = ingridient
                this.updatedIngridients.next(this.ingridients.slice())
        }
        deleteIngridient(index: number) {
                this.ingridients.splice(index, 1)
                this.updatedIngridients.next(this.ingridients.slice())
        }
}