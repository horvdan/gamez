import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppState } from './app.state';
import { environment as env } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState], { developmentMode: !env.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: env.production })
  ],
  exports: [
    NgxsReduxDevtoolsPluginModule,
    NgxsModule
  ]
})
export class StoreModule { }
