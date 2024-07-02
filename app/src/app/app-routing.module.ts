import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AjoutformationComponent } from './ajoutformation/ajoutformation.component';
import { LoginComponent } from './login/login.component';
import { FormcoursComponent } from './formcours/formcours.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: 'formation',
 
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'ajout',
        component: AjoutformationComponent
      },
      {
        path: ':id/edit',
        component: AjoutformationComponent // Route pour l'édition d'une formation spécifique
      },
      {
        path: ':id/view',
        component: TutorialComponent
      },
      {
        path: ':id/ajoutcours',
        component:FormcoursComponent
      }
    ]
  },
  
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'ajout',
        component: AjoutAdminComponent
      },
      {
        path: ':id/edit', // Correction: changer 'admin/:id/edit' à ':id/edit'
        component: AjoutAdminComponent 
      },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'layout', component: LayoutAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
