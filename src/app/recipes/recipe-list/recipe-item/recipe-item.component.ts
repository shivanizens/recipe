import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css'],
    standalone: true,
     imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe!: Recipe;
   @Input() index!:number;

   constructor(){}

     ngOnInit(){

     }
}
