import { Recipe } from './recipe.model';
import {Injectable, EventEmitter} from '@angular/core';

@Injectable({providedIn:'root'})
export class RecipeService{
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes:Recipe[]=[
        new Recipe('Test recipe','test description','https://i.pinimg.com/originals/27/7c/37/277c37917b2a516825a402d87352861d.jpg'),
        new Recipe('test recipe 2','test recipe 2 explanation','https://cdn.yemek.com/mncrop/940/625/uploads/2017/12/patates-pacasi-tarifi.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();//copy of array
    }

}