import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { RootPage } from './pages/root/root.page';

const routes: Routes = [
  {path: '', component: RootPage, children: [
    {path: '', component: DashboardPage},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
