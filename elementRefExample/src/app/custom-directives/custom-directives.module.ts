import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomDirectivesComponent} from './custom-directives.component';
import {ShadowDirective} from './directivesFolder/shadow.directive';
import {InputDirectiveDirective} from './directivesFolder/inputDirective.directive'

const routes: Routes = [
  {
    path: '**',
    component: CustomDirectivesComponent,
  }
];

@NgModule({
  imports: [

    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [CustomDirectivesComponent, ShadowDirective, InputDirectiveDirective],
  providers: []
})
export class CustomDirectivesModule {
}
