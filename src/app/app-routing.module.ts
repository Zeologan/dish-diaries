import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutComponent } from './about/about.component';
import { IngredientsComponent } from './recipe-details/ingredients/ingredients.component';
import { RatingComponent } from './recipe-details/rating/rating.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Home' },               // Default route (displays all components)
  { path: 'recipe', component: NewRecipeComponent, title: 'Recipe', canActivate: [authGuard] },    // Displays new recipe
  // { path: 'recipe/:id', component: RecipeDetailsComponent, title: 'Recipe Details' },    // Displays new recipe-details
  { 
    path: 'recipe/:id', 
    loadChildren: () => import('./recipe-details/recipe-details.module').then(m => m.RecipeDetailsModule), 
    canActivate: [authGuard] 
  }, // Lazy loads RecipeDetailsModule
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact-Us' }, // Displays contact us
  { path: 'about', component: AboutComponent, title: 'About' }, // Displays about
  { path: 'login', component: LoginComponent, title: 'Login' }, // Displays recipe details
  { path: '**', component: NoPageComponent, title: 'Not Found' } // Wild Card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
