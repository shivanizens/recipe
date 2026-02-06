import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

export const RECIPES_ROUTES: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  }
];

// const routes: Routes = [
//   {path: '', component: RecipesComponent, canActivate: [AuthGaurd], children:[
//     {path: '', component: RecipeStartComponent},
//     {path: 'new', component: RecipeEditComponent},
//     {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
//     {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
//   ]},
// ];