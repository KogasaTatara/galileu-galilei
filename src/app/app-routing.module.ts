import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
  {
    path: 'item-detail',
    loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
  {
    path: 'item-detail/:id', 
    loadChildren: () => import('./pages/page-detail/page-detail.module').then( m => m.PageDetailPageModule)
  },
<<<<<<< HEAD
<<<<<<< HEAD
  {
    path: 'page-detail2',
    loadChildren: () => import('./pages/page-detail2/page-detail2.module').then( m => m.PageDetail2PageModule)
  },
      {
    path: 'page-detail2/:id',
    loadChildren: () => import('./pages/page-detail2/page-detail2.module').then( m => m.PageDetail2PageModule)
  },

=======
>>>>>>> 2dee289 (Initial commit)
=======
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
=======
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }

>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }