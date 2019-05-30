import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
  @Output() searchChanged = new EventEmitter<string>();

  isExpanded = false;
  searchText: AbstractControl;

  get icon() {
    return this.isExpanded ? 'fa-times' : 'fa-search';
  }

  ngOnInit() {
    this.searchText = new FormControl('');
    this.searchText.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchChanged.emit(value);
    });
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
