import { Component, Input } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'demo-page',
  template: `
    <h2>Client A - Page 2</h2>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class Page2Component {
}
