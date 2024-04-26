import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  onActiveRecipe(el: Recipe) {
    this.recipeWasSelected.emit(el);
  }
recipes: Recipe[] = [new Recipe('Borsch', 'Good yummi sup with meet and vegs', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Ukrainian-pork-rib-borsch--83702a8.jpg?quality=90&resize=556,505'), new Recipe('Schy', 'Good yummi sup with meet and vegs', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Ukrainian-pork-rib-borsch--83702a8.jpg?quality=90&resize=556,505'), new Recipe('Koka', 'Good yummi sup with meet and vegs', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Ukrainian-pork-rib-borsch--83702a8.jpg?quality=90&resize=556,505')]
}
