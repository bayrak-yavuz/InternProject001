import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { RootPage } from './pages/root/root.page';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [RootPage],
})
export class AppServerModule {}
