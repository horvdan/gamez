import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Category } from '../../../../models/category';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent {
  @Input() categories: Category[] = [];
  @Input() selectedCategorySlug?: string;
  @Output() searchChanged = new EventEmitter<string>();

  isActive(slug: string) {
    return slug === this.selectedCategorySlug;
  }

  onSearchChanged(str: string) {
    this.searchChanged.emit(str);
  }
}
