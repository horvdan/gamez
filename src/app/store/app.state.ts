import { Action, Selector, State, StateContext, createSelector } from '@ngxs/store';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppStateModel } from './app.model';
import { CategoryNormalizerService } from '../services/category-normalizer.service';
import { CategoryService } from '../services/category.service';
import { FetchCategories, SelectCategory, SearchGames, FetchGameById } from './app.actions';
import { GameService } from '../services/game.service';

// Should've used multiple state slices instead, but I guess no time for that
@State<AppStateModel>({
  name: 'app',
  defaults: {
    categories: [],
    games: {},
    selectedCategory: '',
    searchTerm: ''
  }
})
export class AppState {
  constructor(
    private categoryService: CategoryService,
    private categoryNormalizer: CategoryNormalizerService,
    private gameService: GameService
  ) {}

  @Selector()
  static activeCategories(state: AppStateModel) {
    return state.categories.filter(cat => cat.games.find(
      id => state.games[id].enabled
    ));
  }

  @Selector()
  static visibleGames(state: AppStateModel) {
    if (state.searchTerm) {
      return Object.values(state.games).filter(game => (
        game.name.toLocaleLowerCase().indexOf(state.searchTerm) > -1)
      );
    }

    const selectedCategory = state.categories.find(cat => cat.slug === state.selectedCategory);

    if (!selectedCategory) {
      return [];
    }

    return selectedCategory.games.map(id => state.games[id]);
  }

  static gameById(id: string) {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.games[id];
    });
  }

  @Action(FetchCategories, { cancelUncompleted: true })
  public fetchCategories(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();

    if (state.categories.length > 0) {
      return of(state);
    }

    return this.categoryService.getCategories().pipe(
      map(this.categoryNormalizer.normalizeCategories),
      tap(normalizedResult => {
        ctx.patchState({
          categories: normalizedResult.categories,
          games: normalizedResult.games,
        });
      })
    );
  }

  @Action(FetchGameById)
  public fetchGameById(ctx: StateContext<AppStateModel>, action: FetchGameById) {
    const state = ctx.getState();

    if (state.games[action.gameId] && state.games[action.gameId].vendor_properties) {
      return of(state.games[action.gameId]);
    }

    return this.gameService.getGameById(action.gameId).pipe(
      tap(game => {
        ctx.patchState({
          games: {
            ...state.games,
            [action.gameId]: game
          }
        });
      })
    );
  }

  @Action(SelectCategory)
  public selectCategory(ctx: StateContext<AppStateModel>, action: SelectCategory) {
    ctx.patchState({
      selectedCategory: action.slug
    });
  }

  @Action(SearchGames, { cancelUncompleted: true })
  public searchGames(ctx: StateContext<AppStateModel>, action: SearchGames) {
    ctx.patchState({
      searchTerm: action.searchTerm
    });
  }

}
