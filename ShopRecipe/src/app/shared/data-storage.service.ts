import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs";


@Injectable()

export class DataStorageService {
    
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
    ) {}

    recipesUrl: string = 'https://shoprecipe-9df12.firebaseio.com/recipes.json';

    storeRecipes() {
        return this.http.put(this.recipesUrl, this.recipeService.getRecipes());
    }

    keepRecipes(recipe: Recipe[]) {
        return this.http.post(this.recipesUrl, recipe)
    }

    fetchRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.recipesUrl);
    }

}