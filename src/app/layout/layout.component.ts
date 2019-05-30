import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="app-container">
      <app-header></app-header>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}
