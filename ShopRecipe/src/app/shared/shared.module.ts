import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
  declarations: [DropdownDirective],
  imports: [CommonModule],
  exports: [CommonModule, DropdownDirective],
  providers: []
})
export class SharedModule {}

// The shared module holds files that are being used in several components
// This solves the problem of having to mention the dropdown directive in
// two different modules - App Module and the Recipes Module
