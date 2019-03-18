import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>()

  notifyNext() {
    this.recipesChanged.next(this.recipes.slice());
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Sunday Special',
      'White Rice',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/NIgerian_food.jpg',
      [
        new Ingredient ('Rice', 5),
        new Ingredient ('Pepper', 20),
        new Ingredient ('Tomatoes', 20),
        new Ingredient ('Meat', 5),
        new Ingredient ('Salt', 2)
      ]
    ),

    new Recipe(
      'Your Breakfast',
      'Fried Rice & Turkey',
      'https://i1.wp.com/www.nigerianlazychef.com/wp-content/uploads/2016/12/IMG_6781.jpg',
      [
        new Ingredient ('Rice', 5),
        new Ingredient ('Meat', 10),
        new Ingredient ('Green peas', 20),
        new Ingredient ('Groundnut oil', 2)
      ]
    )
  ];

  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyNext()
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.notifyNext()
  }
}
