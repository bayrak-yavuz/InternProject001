import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { RootPage } from './pages/root/root.page';
import { PostsPage } from './pages/posts/posts.page';
import { CategoriesPage } from './pages/categories/categories.page';

const routes: Routes = [
  {path: '', component: RootPage, children: [
    {path: '', component: DashboardPage},
    {path: 'yazilar', component: PostsPage},
    {path: 'kategoriler', component: CategoriesPage}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
