import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("shopForm") slform: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  isSubmitted = false;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  onSubmit(shoppingForm: NgForm) {
    const value = shoppingForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log('form values: ', shoppingForm.value);

    if (this.editMode) {
      this.shoppinglistService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppinglistService.addIngredient(newIngredient);
    }

    this.editMode = false;
    this.isSubmitted = true;

    if (this.isSubmitted) {
      shoppingForm.resetForm();
      console.log('form cleared');
    }
    return false;
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}