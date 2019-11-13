import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({selector: '[appShadow]'})
/*
* Notice how our selector is wrapped in brackets: [appShadow], to properly make it an attribute directive.

*/

/*
* Pass Values in Directive
* */

export class ShadowDirective {
  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
  }

}
