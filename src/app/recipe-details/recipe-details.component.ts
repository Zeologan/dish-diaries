import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HandleDataService, Recipe } from '../services/handle-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,private getRecipe: HandleDataService) {
    console.log('Recipe Details Component Initialized');
   }

  recipeDetails$!: Observable<Recipe>;


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // paramMap help to get Dynamic parameter in it 
    if (id) {
      this.recipeDetails$ = this.getRecipe.getRecipesById(id);
    }
  }
}
