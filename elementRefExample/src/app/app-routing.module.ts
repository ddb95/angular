import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'elementRef',
    loadChildren: './element-reference/element-reference.module#ElementReferenceModule'
  },
  {
    path: 'customDirectives',
    loadChildren: './custom-directives/custom-directives.module#CustomDirectivesModule'
  },
  {
    path: 'contentProjection',
    loadChildren: './content-projection/content-projection.module#ContentProjectionModule'
  },
  {
    path: '**',
    redirectTo: 'elementRef'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
