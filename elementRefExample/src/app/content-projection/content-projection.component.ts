import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  // template: `
  //     <app-demo><h1>Hello App Demo</h1></app-demo>
  //     <app-demo><h1>Hello John</h1></app-demo>
  // `,
  // template: '<h1>Hello {{name}}</h1>',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
  name = 'Kush';

  constructor() {
  }

  ngOnInit() {
  }

}
