import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [FormsModule, AuthRoutingModule],
  exports: [],
  providers: []
})
export class AuthModule {}

// You should not export a module from a feature module so that another feature
// module can use it.
