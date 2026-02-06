import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesService } from './recipes.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,  // because RecipesComponent typically hosts the child route outlet
        RecipeListComponent
    ],
    providers:[RecipesService, ShoppingListService]

})
export class RecipesComponent {

}
