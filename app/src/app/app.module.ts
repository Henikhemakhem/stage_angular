import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AjoutformationComponent } from './ajoutformation/ajoutformation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormcoursComponent } from './formcours/formcours.component';

import { RegisterComponent } from './register/register.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialComponent,
    AjoutformationComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormcoursComponent,
    AjoutAdminComponent,
    RegisterComponent,
    AdminComponent,
    LayoutAdminComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule, // Import CommonModule to use ngFor, ngIf, etc.
    RouterModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
