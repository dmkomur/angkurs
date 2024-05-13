import { Ingridient } from "./ingridient.model"
import { Subject } from 'rxjs';
export class ShopppingService {
        ingridients: Ingridient[] = [{ name: "apple", amount: 6 }, { name: "gul", amount: 16 }]
        updatedIngridients = new Subject<Ingridient[]>()
        getIngridients() {
                return this.ingridients.slice()
        }
        addIngridient(el: Ingridient) {
                this.ingridients.push(el)
                this.updatedIngridients.next(this.ingridients.slice())
        }
        addIngridients(data: Ingridient[]) {
                this.ingridients.push(...data)
                this.updatedIngridients.next(this.ingridients.slice())
        }
}