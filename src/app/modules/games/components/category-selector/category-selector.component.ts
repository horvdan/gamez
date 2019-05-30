import { Component, Input } from '@angular/core';

import { Category } from '../../../../models/category';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent {
  @Input() categories: Category[] = [];
  @Input() selectedCategorySlug?: string;

  isActive(slug: string) {
    return slug === this.selectedCategorySlug;
  }
}
