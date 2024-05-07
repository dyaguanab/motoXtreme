import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';

const routes: Routes = [
  {
    path:'',
    component: CompletePageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteRoutingModule { }
