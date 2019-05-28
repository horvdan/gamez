import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>('/api/game-categories');
  }

  getCategoryBySlug(categorySlug: string) {
    return this.http.get(`/api/game-categories/${categorySlug}`);
  }
}
