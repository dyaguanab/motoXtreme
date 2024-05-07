import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsPageComponent } from './pages/promotions-page/promotions-page.component';

const routes: Routes = [
  {
    path:'',
    component:PromotionsPageComponent,
    outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
