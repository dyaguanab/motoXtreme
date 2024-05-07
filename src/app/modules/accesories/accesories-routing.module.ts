import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriesPageComponent } from './pages/accesories-page/accesories-page.component';

const routes: Routes = [
  {
    path:'',
    component: AccesoriesPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoriesRoutingModule { }
