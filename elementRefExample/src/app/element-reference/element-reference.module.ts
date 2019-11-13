import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementReferenceComponent} from './element-reference.component';
import {RouterModule, Routes} from '@angular/router';
import {ElementReferenceService} from './element-reference.service';

const routes: Routes = [
  {
    path: '**',
    component: ElementReferenceComponent,
  }
];

@NgModule({
  imports: [

    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [ElementReferenceComponent],
  providers: [ElementReferenceService]
})
export class ElementReferenceModule {
}
