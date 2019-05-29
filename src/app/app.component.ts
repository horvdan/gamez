import { FetchCategories } from './store/app.actions';
import { Component, OnInit } from '@angular/core';

import { AppState } from './store/app.state';
import { AppStateModel } from './store/app.model';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Select(AppState) categories$: Observable<AppStateModel>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchCategories());
  }
}
