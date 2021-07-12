import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { RootPage } from './pages/root/root.page';
import { CustomPage } from './pages/custom/custom.page';
import { NotFoundPage } from './pages/not-found/not-found.page';


@NgModule({
  declarations: [RootPage, CustomPage, NotFoundPage],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
