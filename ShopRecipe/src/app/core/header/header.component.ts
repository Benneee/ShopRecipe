import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../recipes/recipe.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

declare var gtag;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService, public authService: AuthService) {}

  ngOnInit() {}

  onOverwriteData() {
    this.dataStorageService.storeRecipes().subscribe((res: Response) => {
      console.log(res);
    });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }

  onLogout() {
    this.authService.logoutUser();
    gtag('event', 'log out', {
      event_category: 'authentication',
      event_label: 'user logged out',
      event_action: 'user logged out',
      event_value: 3
    });
  }
}
