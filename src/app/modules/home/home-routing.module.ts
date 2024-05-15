import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('@modules/complete/complete.module').then(m => m.CompleteModule)
  },
  {
    path: 'accesories',
    loadChildren:() => import('@modules/accesories/accesories.module').then(m => m.AccesoriesModule)
  },
  {
    path: 'complete',
    loadChildren:() => import('@modules/complete/complete.module').then(m => m.CompleteModule)
  },
  {
    path: 'experience',
    loadChildren:() => import('@modules/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'promotions',
    loadChildren:() => import('@modules/promotions/promotions.module').then(m => m.PromotionsModule)
  },
  {
    path: 'support',
    loadChildren:() => import('@modules/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'xbow',
    loadChildren:() => import('@modules/xbow/xbow.module').then(m => m.XbowModule)
  },
  {
    path: 'language',
    loadChildren:() => import('@modules/language/language.module').then(m => m.LanguageModule)
  },
  {
    path: 'contact',
    loadChildren:() => import('@modules/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
