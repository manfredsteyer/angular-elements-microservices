import { Component, Input } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'client-a',
  template: `
    <div id="client">
      <h1>Client A</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client { border: darkred dashed 5px; padding: 10px }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ClientAComponent {

  constructor(private router: Router) {
    router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
  }

}
