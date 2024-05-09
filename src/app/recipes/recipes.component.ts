import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  choosenRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recipeService.chooseRecipe.subscribe((el: Recipe) => this.choosenRecipe = el
  )}
  

}
