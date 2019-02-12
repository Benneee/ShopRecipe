import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';



export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sunday Special',
      'White Rice',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/NIgerian_food.jpg'
    ),

    new Recipe(
      'Your Breakfast',
      'Fried Rice & Turkey',
      'https://i1.wp.com/www.nigerianlazychef.com/wp-content/uploads/2016/12/IMG_6781.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
