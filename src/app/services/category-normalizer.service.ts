import { Injectable } from '@angular/core';

import { Category } from './../models/category';
import { Games } from '../store/app.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryNormalizerService {
  normalizeCategories = (
    apiResponse
  ): {
    categories: Category[],
    games: Games
  } => {
    const games = {};
    const categories = apiResponse._embedded.game_categories.map(cat =>
      this.mapCategories(cat, games)
    );

    return {
      categories,
      games
    };
  }

  private mapCategories = (category, gameCache) => {
    return {
      name: category.name,
      slug: category.slug,
      games: category._embedded.games
        .filter(this.filterInactiveGames)
        .map(game => this.mapGames(game, gameCache))
    };
  }

  private filterInactiveGames(game) {
    return game.enabled;
  }

  private mapGames = (game, gameCache) => {
    gameCache[game.id] = game;
    return game.id;
  }
}
