import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <h2>Client B - Page 1</h2>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class Page1Component {
}
