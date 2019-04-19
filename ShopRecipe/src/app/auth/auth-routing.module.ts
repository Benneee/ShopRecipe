import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const authRoutes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent }
];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule {}

// This module is to control the routing for the AuthComponent sub-files:
// Sign up and Sign in components
// You don't need the declarations array in the auth-routing module
