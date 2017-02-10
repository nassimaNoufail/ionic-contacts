import { Component } from '@angular/core';

import { NavController, NavParams, Events } from 'ionic-angular';

import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  //entryComponents: [ AddPage ]
})
export class HomePage {
  contacts: Array<{name: string, email: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events : Events) {
    this.contacts = [
        {name: 'Sam Magura', email: 'srmagura@ncsu.edu'}
    ];

    events.subscribe('contact:added', (contact) => {
        this.contacts.push(contact)
    });
  }

  addButtonClicked(){
      this.navCtrl.push(AddPage, {});
  }
}
