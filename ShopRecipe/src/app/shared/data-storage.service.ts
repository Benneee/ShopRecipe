import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  recipesUrl: string = "https://shoprecipe-9df12.firebaseio.com/recipes.json";
  authUrl: string = "?auth=";
  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(
      this.recipesUrl + this.authUrl + token,
      this.recipeService.getRecipes()
    );
  }

  keepRecipes(recipe: Recipe[]) {
    return this.http.post(this.recipesUrl, recipe);
  }

  fetchRecipes(): Observable<Recipe[]> {
    const token = this.authService.getToken();
    return this.http.get<Recipe[]>(this.recipesUrl + this.authUrl + token);
  }
}
