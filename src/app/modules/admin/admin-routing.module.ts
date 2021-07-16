import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { RootPage } from './pages/root/root.page';
import { PostsPage } from './pages/posts/posts.page';
import { CategoriesPage } from './pages/categories/categories.page';
import { PostEditPage } from './pages/post-edit/post-edit.page';
import { CategoriesEditPage } from './pages/categories-edit/categories-edit.page';
import { SupportPage } from './pages/support/support.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';

const routes: Routes = [
  {path: '', component: RootPage, children: [
    {path: '', component: DashboardPage},
    {path: 'yazilar', component: PostsPage},
    {path: 'yazilar/:id', component: PostEditPage},
    {path: 'kategoriler', component: CategoriesPage},
    {path: 'kategoriler/:id', component: CategoriesEditPage},
    {path: 'talepler', component:SupportPage},
    {path: 'hesap-ayarlari', component:ChangePasswordPage}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
