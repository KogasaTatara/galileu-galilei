import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'item-detail',
    loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
  {
    path: 'item-detail/:id', 
    loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
=======
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-detail',
    loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
    {
    path: 'page-detail/:id',
    loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
  {
    path: 'page-detail2',
    loadChildren: () => import('./pages/page-detail2/page-detail2.module').then( m => m.PageDetail2PageModule)
  },
      {
    path: 'page-detail2/:id',
    loadChildren: () => import('./pages/page-detail2/page-detail2.module').then( m => m.PageDetail2PageModule)
  },
>>>>>>> origin/master

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> origin/master
