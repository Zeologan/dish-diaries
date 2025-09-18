import { Component, computed } from '@angular/core';
import { HandleDataService } from '../services/handle-data.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

  recipes = computed(() => this.recipeService.recipeList());
  constructor(private recipeService: HandleDataService) { }

  deleteRecipe(id: number): void {
    // Call the service to delete the recipe from the backend
    this.recipeService.deleteRecipe(id).subscribe(() => {
      // Update the signal to remove the deleted recipe
      const currentRecipes = this.recipeService.recipeList();
      this.recipeService.recipeList.set(currentRecipes.filter(recipe => recipe.id !== id));
      console.log("Deleted successfully");
    }, error => {
      console.error('Error deleting recipe:', error); // Handle error
    });
  }

}
