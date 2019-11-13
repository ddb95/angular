import {Component} from '@angular/core';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-element-reference',
  templateUrl: './element-reference.component.html',
  styleUrls: ['./element-reference.component.scss']
})
export class ElementReferenceComponent implements AfterViewInit {
  name = 'Angular Example using: Element Ref';
  @ViewChild('myDiv') divView: ElementRef;

  constructor() {
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log(this.divView);
    this.divView.nativeElement.innerHTML = 'This div is using Viewchild and Elementref';
  }
}
