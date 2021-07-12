import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPage } from './pages/custom/custom.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { RootPage } from './pages/root/root.page';

const routes: Routes = [
  {path: '', component: RootPage, children: [
    {path: '', component: CustomPage},
    {path: '404', component: NotFoundPage},
    {path: ':pageUrl', component: CustomPage},
    {path: ':categoryUrl/:postUrl', component: CustomPage},
    {path: '**', redirectTo: '404'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
