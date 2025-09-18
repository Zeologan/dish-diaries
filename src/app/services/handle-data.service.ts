import { HttpClient } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

export interface Recipe {
  id: number;
  name: string;
  recipe: string;
  image: string;
  bgImage: string;
  mins: number;
}

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  recipeList = signal<Recipe[]>([]); // Signal to store recipes

  constructor(private http: HttpClient) {
    // Automatically fetch recipes on service initialization
    effect(() => {
      this.getRecipes().subscribe({
        next: (recipes) => this.recipeList.set(recipes),
        error: (error) => console.error('Error fetching recipes:', error)
      });
    });
  }


  // Get recipes from the API and update the signal
  // Handle Api Url With Using environment
  addRecipe(newRecipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.apiUrl}/recipe`, newRecipe).pipe(
      // Simply return the added recipe without manually updating the signal
      catchError((error) => {
        console.error('Error adding recipe:', error);
        return throwError(error);
      })
    );
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipe`).pipe(
      // Update the signal when recipes are fetched
      tap((recipes) => this.recipeList.set(recipes)),
      catchError((error) => {
        console.error('Error fetching recipes:', error);
        return throwError(error);
      })
    );
  }


  deleteRecipe(id: number): Observable<void> {
    console.log(this.recipeList);

    return this.http.delete<void>(`${environment.apiUrl}/recipe/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting recipe:', error);
        return throwError(error);
      })
    );
  }


  // nested Routing 
  getRecipesById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.apiUrl}/recipe/${id}`);
  }

  //----- Add New Recipe form
  isAddRecipeVisible = false;

  toggleAddRecipe() {
    this.isAddRecipeVisible = !this.isAddRecipeVisible;
  }

  // Method to log in
  private loggedIn = false;
  login() {
    this.loggedIn = true; // Set to true upon successful login
    localStorage.setItem('isActive', 'true'); // Persist login state
  }

  // Method to log out
  logout() {
    this.loggedIn = false; // Set to false upon logout
    localStorage.removeItem('isActive'); // Remove login state from local storage
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
