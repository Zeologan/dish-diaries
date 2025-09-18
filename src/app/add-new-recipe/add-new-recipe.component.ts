import { Component } from '@angular/core';
import { HandleDataService, Recipe } from '../services/handle-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.css']
})
export class AddNewRecipeComponent {
  recipeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addRecipeService: HandleDataService
  ) {
    // Initialize the form with default values
    this.recipeForm = this.fb.group({
      recipeName: ['', Validators.required],
      time: ['', Validators.required],
      image: ['', Validators.required],
      recipeImage: ['', Validators.required],
      recipe: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (!this.recipeForm.valid) return;
  
    const { recipeName, recipe, time, image, recipeImage } = this.recipeForm.value;
  
    const newRecipe: any = {
      name: recipeName,
      recipe,
      image: `assets/images/${image}.jpg`,
      bgImage: recipeImage,
      mins: time,
    };
  
    // Add recipe via service and reset the form
    this.addRecipeService.addRecipe(newRecipe).subscribe(
      (res) => {
        console.log('Recipe added:', res);
        this.recipeForm.reset();
        // Fetch the updated recipe list after adding a recipe
        this.addRecipeService.getRecipes().subscribe();
      },
      (err) => console.error('Error:', err)
    );
  }
  

  // form visibility 
  toggleAddRecipe() {
    this.addRecipeService.toggleAddRecipe(); // Use the service to toggle the flag
  }
}
