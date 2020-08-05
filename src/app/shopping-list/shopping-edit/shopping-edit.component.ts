import { ShoppingListService } from './../shoppingList.service';
import { Ingredient } from './../../shared/Ingeredient.model';
import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name',{static:false}) nameOfIngredient:ElementRef;
  @ViewChild('amount',{static:false}) amountOfIngredient:ElementRef;
  //@Output() addingEvetnt=new EventEmitter<Ingredient>();



  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    
  }
  onAddIngredient(){
    const ingName:string= this.nameOfIngredient.nativeElement.value;
    const ingAmount:number=this.amountOfIngredient.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    //this.addingEvetnt.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);

  }

}
