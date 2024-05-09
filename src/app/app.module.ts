import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupportPageComponent } from './modules/support/pages/support-page/support-page.component';
import { CompletePageComponent } from './modules/complete/pages/complete-page/complete-page.component';
import { XbowPageComponent } from './modules/xbow/pages/xbow-page/xbow-page.component';
import { AccesoriesPageComponent } from './modules/accesories/pages/accesories-page/accesories-page.component';
import { PromotionsPageComponent } from './modules/promotions/pages/promotions-page/promotions-page.component';
import { ExperiencePageComponent } from './modules/experience/pages/experience-page/experience-page.component';
import { ContactPageComponent } from '@modules/contact/contact-page/contact-page.component';
import { LanguagePageComponent } from '@modules/language/language-page/language-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SupportPageComponent,
    CompletePageComponent,
    XbowPageComponent,
    AccesoriesPageComponent,
    PromotionsPageComponent,
    ExperiencePageComponent,
    ContactPageComponent,
    LanguagePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
