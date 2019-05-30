import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesComponent } from "./pages/categories/categories.component";
import { CategorySelectorComponent } from "./components/category-selector/category-selector.component";
import { PlayGameComponent } from "./pages/play-game/play-game.component";
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategorySelectorComponent,
    PlayGameComponent,
    GameListComponent,
    GameCardComponent,
    SearchComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class GamesModule {}
