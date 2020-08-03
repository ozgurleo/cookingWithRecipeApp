import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeService.selectedRecipe.emit(this.recipe)
  }

}
