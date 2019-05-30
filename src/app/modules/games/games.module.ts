import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { CategoriesComponent } from "./pages/categories/categories.component";
import { CategorySelectorComponent } from "./components/category-selector/category-selector.component";
import { PlayGameComponent } from "./pages/play-game/play-game.component";
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategorySelectorComponent,
    PlayGameComponent,
    GameListComponent,
    GameCardComponent
  ],
  imports: [CommonModule, RouterModule]
})
export class GamesModule {}
