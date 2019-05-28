import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ApiInterceptor } from './interceptors/api.interceptor';
import { ParamsInterceptor } from './interceptors/params.interceptor';
import { CategoryService } from './services/category.service';
import { GameService } from './services/game.service';

const MY_INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...MY_INTERCEPTORS,
    CategoryService,
    GameService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
