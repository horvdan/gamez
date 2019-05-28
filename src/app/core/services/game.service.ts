import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {

  constructor(private http: HttpClient) { }

  getGameById(id: string) {
    return this.http.get(`api/games/${id}`);
  }
}
