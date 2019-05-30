import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchGameById } from 'src/app/store/app.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Game } from '../../../../models/game';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {

  game$: Observable<Game>;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(new FetchGameById(id));
    this.game$ = this.store.select(AppState.gameById(id));
  }
}
