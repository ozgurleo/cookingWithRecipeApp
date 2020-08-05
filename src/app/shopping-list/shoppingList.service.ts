import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from './../shared/Ingeredient.model';

@Injectable({providedIn:'root'})
export class ShoppingListService{
    ingredientsChanged= new EventEmitter<Ingredient[]>();
    ingredientsFromRecipe = new EventEmitter<Ingredient[]>();
     ingredients:Ingredient[]=[
        new Ingredient('tomato',3),
        new Ingredient('onion',2)
      ];

    getIngredientLists(){
        return this.ingredients.slice();//copy of array
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

   

}