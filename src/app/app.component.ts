import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-joke-list></app-joke-list>
  </div>
  `,
  styles: []
})
export class AppComponent {
    // jokes: Array<Object>
}
