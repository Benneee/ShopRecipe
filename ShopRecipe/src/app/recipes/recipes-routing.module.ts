import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipeRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ":id", component: RecipeDetailComponent },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RecipesRoutingModule {}

// We used the forRoot method in the app module for the router because
// we were in the app module. However because this is a child/feature
// module, we use the forChild method.
