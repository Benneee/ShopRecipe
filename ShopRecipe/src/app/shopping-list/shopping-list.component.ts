import { Ingredient } from './../shared/ingredient.model';
import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistservice.getIngredients()
    this.subscription = this.shoppinglistservice.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
