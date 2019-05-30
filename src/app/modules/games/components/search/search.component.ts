import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchGames } from 'src/app/store/app.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;

  isExpanded = false;
  searchText: AbstractControl;

  get icon() {
    return this.isExpanded ? 'fa-times' : 'fa-search';
  }

  constructor(private store: Store) {}

  ngOnInit() {
    this.searchText = new FormControl('');
    this.searchText.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => this.store.dispatch(new SearchGames(value)));
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {
      setTimeout(() => this.searchElement.nativeElement.focus(), 0);
    } else {
      this.searchText.setValue('');
    }
  }
}
