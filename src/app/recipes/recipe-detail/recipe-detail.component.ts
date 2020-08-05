import { Ingredient } from './../../shared/Ingeredient.model';
import { ShoppingListService } from './../../shopping-list/shoppingList.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input()sentRecipeToDetails: any;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onSentToSL(){

    this.slService.ingredients.push(...this.sentRecipeToDetails.ingredients)
   
  }

}
