import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing-page/landing-page.module').then((module) => module.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((module) => module.LoginModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./modules/sign-up/sign-up.module').then((module) => module.SignUpModule)
  },
  {
    path: '**',
    redirectTo: "/login"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
