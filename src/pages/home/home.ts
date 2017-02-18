/* Home page. Display a list of contacts (name & email). Page has two
types of buttons: an add button at the bottom which takes the user to the
"Add contact" page, and a delete button for each contact. */

import { Component } from '@angular/core';

import { ModalController, NavController, NavParams, Events } from 'ionic-angular';

import { AddPage } from '../add/add';
import { ChooseIconPage } from '../chooseIcon/chooseIcon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  contacts: Array<{id: number, name: string, email: string, icon: string}>;
  lastContactId: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events : Events, public modalCtrl : ModalController) {
    this.contacts = [];

    // Create a default contact
    this.addContact({name: 'Sam Magura', email: 'srmagura@ncsu.edu'});

    // Listen for the "contact:added" event
    //events.subscribe('contact:added', this.addContact);
    events.subscribe('contact:added', this.addContact);
  }

  addContact = (contact) => {
      // Give the contact an ID and append it to the list
      // Need an instance function to access `this`
      contact.id = this.lastContactId++;
      contact.icon = 'person';
      this.contacts.push(contact);
  }

  addButtonClicked = () => {
      // Navigate to the Add Contact page
      this.navCtrl.push(AddPage, {});
  }

  deleteButtonClicked = (id) => {
      // Remove the contact from the list
      for (let i in this.contacts){
          if(this.contacts[i].id == id){
              // i is actually a string, so need to convert it to an int
              this.contacts.splice(parseInt(i), 1);
              break;
          }
      }
  }

  iconClicked = (id) => {
      let contact = null;

      // Search through the list to find the right contact
      for (let i in this.contacts){
          if(this.contacts[i].id == id){
              contact = this.contacts[i];
          }
      }

      let modal = this.modalCtrl.create(ChooseIconPage, {'contact': contact});
      modal.present();
  }
}
