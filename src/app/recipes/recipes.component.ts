import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeOnDetailsSection:Recipe;

  constructor() { }

  ngOnInit(): void {
  }
  selectedRecipeFromList(recipe:Recipe){
      this.recipeOnDetailsSection=recipe;
      
  }

}
