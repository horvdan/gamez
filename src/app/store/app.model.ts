import { Game } from '../models/game';
import { Category } from '../models/category';

export interface AppStateModel {
  categories: Category[];
  games: Games;
  selectedCategory: string;
  searchTerm: string;
}

export interface Games {
  [id: string]: Game;
}
