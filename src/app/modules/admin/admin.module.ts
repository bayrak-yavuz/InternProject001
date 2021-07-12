import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RootPage } from './pages/root/root.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';


@NgModule({
  declarations: [RootPage, DashboardPage, HeaderComponent, FooterComponent, NavigationComponent, BreadcrumbComponent, SplashScreenComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
