import { ShoppingListService } from './shoppingList.service';
import { Ingredient } from './../shared/Ingeredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientLists();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingArray: Ingredient[]) => {
        this.ingredients = ingArray;
      }
    );
    this.shoppingListService.ingredientsFromRecipe.subscribe(
      (ingredients: Ingredient[]) => {
        this.shoppingListService.ingredients.push(...ingredients);
        console.log(ingredients)
      }
    );
  }
}
