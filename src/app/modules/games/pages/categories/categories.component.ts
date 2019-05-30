import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, take, withLatestFrom } from 'rxjs/operators';

import { FetchCategories, SelectCategory } from './../../../../store/app.actions';
import { Category } from './../../../../models/category';
import { AppState } from 'src/app/store/app.state';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Select(AppState.activeCategories) categories$: Observable<Category[]>;
  @Select(AppState.gamesInSelectedCategory) games$: Observable<Game[]>;
  @Select(state => state.app.selectedCategory) selectedCategory$: Observable<string>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(new FetchCategories());

    this.route.paramMap.subscribe(params => {
      const category = params.get('slug');
      if (category) {
        this.store.dispatch(new SelectCategory(category))
      }
    });

    this.categories$.pipe(
      filter(categories => categories.length > 0),
      take(1),
      withLatestFrom(this.route.paramMap)
    ).subscribe(([categories, params]) => {
      if (!params.get('slug')) {
        this.store.dispatch(new SelectCategory(categories[0].slug));
      }
    });
  }
}
