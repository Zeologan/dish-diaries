import { CanActivateFn, Router } from '@angular/router';
import { HandleDataService } from '../services/handle-data.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const user = inject(HandleDataService); // Inject the service
  const router = inject(Router); // Inject the router

  if (user.isAuthenticated()) {
    return true; // Allow access if the user is authenticated
  } else {
    alert("Login to access.");
    router.navigate(['/login']); // Redirect to login page if not logged in
    return false; // Deny access
  }
};
