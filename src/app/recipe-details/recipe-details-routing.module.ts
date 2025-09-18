import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeDetailsComponent,
    children: [
      {
        path: 'ingredients',
        loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule)
      },
      {
        path: 'ratings',
        loadChildren: () => import('./rating/rating.module').then(m => m.RatingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeDetailsRoutingModule { }
