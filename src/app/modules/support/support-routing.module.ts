import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportPageComponent } from './pages/support-page/support-page.component';

const routes: Routes = [
  {
    path:'',
    component:SupportPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
