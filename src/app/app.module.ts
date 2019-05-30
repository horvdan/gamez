import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ParamsInterceptor } from './interceptors/params.interceptor';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { StoreModule } from './store/store.module';
import { GamesModule } from './modules/games/games.module';
import { LayoutComponent } from './layout/layout.component';

const MY_INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GamesModule,
    StoreModule
  ],
  providers: [
    ...MY_INTERCEPTORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
