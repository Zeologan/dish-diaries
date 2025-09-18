import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverEffectDirective } from './hover-effect.directive';



@NgModule({
  declarations: [
    HoverEffectDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HoverEffectDirective
  ]
})
export class SharedModule { }
