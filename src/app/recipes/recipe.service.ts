import { EventEmitter, Injectable } from "@angular/core"
import { Recipe } from "./recipe.model"
import { ShopppingService } from "../shopping-list/shopping.service"
import { Ingridient } from "../shopping-list/ingridient.model"
import { Subject } from "rxjs"
@Injectable()
export class RecipeService {
        recipes: Recipe[] = [new Recipe('Borsch', 'Good yummi sup with meet and vegs', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Ukrainian-pork-rib-borsch--83702a8.jpg?quality=90&resize=556,505', [{name: "grusha", amount: 5}, {name: "meat", amount: 5}]),
                new Recipe('Schy', 'Good yummi sup with meet and vegs', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Ukrainian-pork-rib-borsch--83702a8.jpg?quality=90&resize=556,505', [{name: "meat", amount: 2}, {name: "sol", amount: 6}]),
                new Recipe('Koka', 'Good yummi sup with meet and vegs', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Ukrainian-pork-rib-borsch--83702a8.jpg?quality=90&resize=556,505', [{name: "meat", amount: 5}, {name: "luk", amount: 2}])]

        chooseRecipe = new Subject<Recipe>()
        constructor(private shoppingService: ShopppingService) { }
        
        updateRecipes = new Subject<Recipe[]>

        getRecipes() {
                return this.recipes.slice()
        }
        addIngridientsToShoppning(data: Ingridient[]) {
                this.shoppingService.addIngridients(data)
        }
        getRecipe(i: number) {
                return this.recipes[i]
        }
        addRecipe(recipe: Recipe) {
                this.recipes.push(recipe)
                this.updateRecipes.next(this.recipes.slice())
        }
        updateRecipe(index: number, newRecipe: Recipe) {
                this.recipes[index] = newRecipe  
                this.updateRecipes.next(this.recipes.slice())
        }
        deleteRecipe(index: number) {
                this.recipes.splice(index, 1)
                this.updateRecipes.next(this.recipes.slice())
        }
} 