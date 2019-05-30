import { Action, Selector, State, StateContext } from "@ngxs/store";
import { of } from 'rxjs';
import { map, tap } from "rxjs/operators";

import { AppStateModel } from './app.model';
import { CategoryNormalizerService } from "../services/category-normalizer.service";
import { CategoryService } from "../services/category.service";
import { FetchCategories, SelectCategory } from './app.actions';

// Should've used multiple state slices instead, but I guess no time for that
@State<AppStateModel>({
  name: "app",
  defaults: {
    categories: [],
    games: {},
    selectedCategory: ''
  }
})
export class AppState {
  constructor(
    private categoryService: CategoryService,
    private categoryNormalizer: CategoryNormalizerService
  ) {}

  @Selector()
  static activeCategories(state: AppStateModel) {
    return state.categories.filter(cat => cat.games.length > 0);
  }

  @Selector()
  static gamesInSelectedCategory(state: AppStateModel) {
    const selectedCategory = state.categories.find(cat => cat.slug === state.selectedCategory);

    if (!selectedCategory) {
      return [];
    }

    return selectedCategory.games.map(id => state.games[id]);
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
          games: normalizedResult.games
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
}
