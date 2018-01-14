import { Component, Input } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'client-b',
  template: `
    <div id="client">
      <h1>Client B</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client { border: navy dashed 5px; padding: 10px }
  `],  
  encapsulation: ViewEncapsulation.Native
})
export class ClientBComponent {
  constructor(private router: Router) {
    router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
  }

}
