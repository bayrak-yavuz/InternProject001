import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginPage } from './pages/admin-login/admin-login.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { AdminRegisterPage } from './pages/admin-register/admin-register.page';
const routes: Routes = [
  {path: 'login', component: AdminLoginPage},
  {path: 'register', component: AdminRegisterPage},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'admin/:', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  {path: '', loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)},
  {path: '**', component: NotFoundPage},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
