import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.updateTransform('scale(1.1)');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.updateTransform('scale(1)');
  }

  private updateTransform(transform: string) {
    const imgElement = this.elementRef.nativeElement.querySelector('img');
    imgElement.style.transform = transform;
    imgElement.style.transition = 'transform 0.3s ease-in-out';
  }
}
