import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },

  // Lazy-load a ROUTE CONFIG (Routes array)
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.routes').then(m => m.RECIPES_ROUTES),
    // If you default-export the routes, you can simplify to:
    // loadChildren: () => import('./recipes/recipes.routes'),
  },

  // Lazy-load a STANDALONE COMPONENT
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping.routes').then(
        m => m.shoppingRoutes
      ),
    // If ShoppingListComponent is default export:
    // loadComponent: () => import('./shopping-list/shopping-list.component'),
  },

  // Lazy-load a STANDALONE COMPONENT
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then(m => m.AuthComponent),
  },

  // Optional: wildcard
  // { path: '**', redirectTo: 'recipes' },
];
``