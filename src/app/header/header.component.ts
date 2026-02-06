import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes/recipes.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports:[RouterLinkActive, RouterLink, DropdownDirective],
  providers: [DataStorageService, AuthService, RecipesService, ShoppingListService]
})
export class HeaderComponent {
  private userSub!: Subscription;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user; //user ? true : false;
      }
    );
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
    this.router.navigate(['/recipes']);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
