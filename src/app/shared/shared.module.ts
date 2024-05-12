import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrimaryComponent } from './components/navbar-primary/navbar-primary.component';
import { NavbarGlobalComponent } from './components/navbar-global/navbar-global.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarPrimaryComponent,
    NavbarGlobalComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarGlobalComponent,
    NavbarPrimaryComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
