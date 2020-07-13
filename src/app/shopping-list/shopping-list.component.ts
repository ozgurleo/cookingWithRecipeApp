import { Ingredient } from './../shared/Ingeredient.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('tomato',3),
    new Ingredient('onion',2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
