import { Action, Selector, State, StateContext } from "@ngxs/store";
import { of } from 'rxjs';
import { map, tap } from "rxjs/operators";

import { AppStateModel } from './app.model';
import { CategoryNormalizerService } from "../services/category-normalizer.service";
import { CategoryService } from "../services/category.service";
import { FetchCategories } from './app.actions';

@State<AppStateModel>({
  name: "app",
  defaults: {
    categories: [],
    games: {}
  }
})
export class AppState {
  constructor(
    private categoryService: CategoryService,
    private categoryNormalizer: CategoryNormalizerService
  ) {}

  @Action(FetchCategories, { cancelUncompleted: true })
  public fetchCategories(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();

    if (state.categories.length > 0) {
      return of(state);
    }

    return this.categoryService.getCategories().pipe(
      map(this.categoryNormalizer.normalizeCategories),
      tap(normalizedResult => {
        ctx.setState({
          ...state,
          categories: normalizedResult.categories,
          games: normalizedResult.games
        });
      })
    );
  }
}
