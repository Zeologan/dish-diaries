import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailsRoutingModule } from './recipe-details-routing.module';
import { RecipeDetailsComponent } from './recipe-details.component';


@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [
    CommonModule,
    RecipeDetailsRoutingModule
  ]
})
export class RecipeDetailsModule { 
  constructor(){
    console.log('Recipe Details Page');
  }
}
