import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingeredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Meat ball',
      'test description',
      'https://i.pinimg.com/originals/27/7c/37/277c37917b2a516825a402d87352861d.jpg',
      [new Ingredient('meat', 2), new Ingredient('potato', 4)]
    ),
    new Recipe(
      'spagetti',
      'test recipe 2 explanation',
      'https://cdn.yemek.com/mncrop/940/625/uploads/2017/12/patates-pacasi-tarifi.jpg',
      [new Ingredient('spagetti', 2), new Ingredient('tomato', 3)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //copy of array
  }
}
