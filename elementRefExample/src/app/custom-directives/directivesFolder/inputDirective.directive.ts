import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[appinputsDirective]'})
export class InputDirectiveDirective implements OnInit {
  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    let shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }
}
