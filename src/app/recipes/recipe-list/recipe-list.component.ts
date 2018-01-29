import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is test', 
    'https://i.vimeocdn.com/portrait/58832_300x300'),
    new Recipe('A Test Recipe', 'This is test', 
    'https://i.vimeocdn.com/portrait/58832_300x300')
  ];

  constructor() { }

  ngOnInit() {
  }

}
