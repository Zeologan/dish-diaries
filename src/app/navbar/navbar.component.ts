import { Component } from '@angular/core';
import { HandleDataService } from '../services/handle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public userService: HandleDataService,
    private router: Router,
    public addrecipe: HandleDataService) { }

    toggleActive() {
      if (this.userService.isAuthenticated()) {
        this.userService.logout();
        this.router.navigate(['/']);
        alert("Sign out");
      } else {
        this.router.navigate(['/login']);
      }
    }

  // Shortened method name
  toggleAddRecipe() {
    this.addrecipe.toggleAddRecipe(); // Use the service to toggle the recipe visibility
  }

}
