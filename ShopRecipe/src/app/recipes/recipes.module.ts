import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { DropdownDirective } from "../shared/dropdown.directive";
import { RecipesRoutingModule } from "./recipes-routing.module";
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective
  ],
  imports: [ReactiveFormsModule, RecipesRoutingModule, CommonModule]
})
export class RecipesModule {}

// The Common Module is a regular import for feature modules because it gives access to
// in-built angular classes.

// The Common Module is used in Feature Modules while the Browser Module is used
// in the app module, this is so because the Browser Module contains everything in the
// Common Module and more - what the app module would need on loading up the whole project

// If we create a feature module, we have to move all the
// routes concerned with the components of that feature module
// to it...
