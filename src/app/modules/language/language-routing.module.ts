import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagePageComponent } from './language-page/language-page.component';

const routes: Routes = [
  {
  path:'',
  component: LanguagePageComponent,
  outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
