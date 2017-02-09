import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Array<{name: string, email: string}>;

  constructor() {
    this.contacts = [
        {name: 'Sam Magura', email: 'srmagura@ncsu.edu'}
    ];
  }
}
