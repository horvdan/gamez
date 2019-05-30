import { Routes } from '@angular/router';

import { CategoriesComponent } from './pages/categories/categories.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';

export const GAMES_ROUTES: Routes = [
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games', component: CategoriesComponent},
  {path: 'games/:slug', component: CategoriesComponent},
  {path: 'play/:id', component: PlayGameComponent},
];
