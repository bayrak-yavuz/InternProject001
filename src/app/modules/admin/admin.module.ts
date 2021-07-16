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
import { PostsPage } from './pages/posts/posts.page';
import { CategoriesPage } from './pages/categories/categories.page';
import { PostEditPage } from './pages/post-edit/post-edit.page';
import { CategoriesEditPage } from './pages/categories-edit/categories-edit.page';
import { ChangePasswordPage } from './pages/change-password/change-password.page';
import { SupportPage } from './pages/support/support.page';

@NgModule({
  declarations: [RootPage, DashboardPage, HeaderComponent, FooterComponent, NavigationComponent, BreadcrumbComponent, SplashScreenComponent, PostsPage, CategoriesPage, PostEditPage, CategoriesEditPage, ChangePasswordPage, SupportPage],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
