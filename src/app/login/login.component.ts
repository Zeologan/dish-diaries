import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HandleDataService } from '../services/handle-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  // Predefined user credentials
  authUser = { username: '@dishdiaries', password: '123456789'};

  constructor(private userService: HandleDataService, private router: Router) { }

  onSubmit() {
    if (this.username === this.authUser.username && this.password === this.authUser.password) {
      // If login is successful
      this.userService.login(); // Use the login method to set the user as logged in
      localStorage.setItem('isActive', 'true'); // Optionally persist login state
      this.router.navigate(['/recipe']); // Navigate to the recipe page
    } else {
      alert('Invalid username or password. Please try again.'); // Show error if login fails
    }
  }
}
