import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XbowPageComponent } from './pages/xbow-page/xbow-page.component';

const routes: Routes = [
  {
    path:'',
    component:XbowPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XbowRoutingModule { }
