import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <h2>Client A - Page 1</h2>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class Page1Component {
}
