import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  // The home route is added and made the first page for lazy loading
  // { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
