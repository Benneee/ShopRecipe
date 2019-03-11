import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      })
      // The id originally comes as a string, conversion is needed, hence the + sign
      /**
       *  The crazy undefined error I was getting was because
       *  I didn't assign "this.recipe" to the result of the service
       *  */ 
  }
  onAddToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
    // console.log('added to shopping list');
  }
}
