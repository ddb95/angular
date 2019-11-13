import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentProjectionComponent} from './content-projection.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContentProjectionComponent,
  },
  {
    path: 'demo',
    loadChildren: './demo/demo.module#DemoModule'
  }
];

@NgModule({
  imports: [

    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [ContentProjectionComponent],
  providers: [],
  exports: [RouterModule, ContentProjectionComponent]
})
export class ContentProjectionModule {
}
