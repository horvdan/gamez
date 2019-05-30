import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GAMES_ROUTES } from './modules/games/games.routes';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: GAMES_ROUTES
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
