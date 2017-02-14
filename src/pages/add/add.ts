/* Add Contact page. Contains a form with two text inputs: name and email, and
a submit button. Neither name nor email is required. */

// Idea to use events for communication in pages from:
// http://stackoverflow.com/questions/36312635/how-to-pass-parameters-in-pop-method-of-ionic2

import { Component  } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';

import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

    addForm: AbstractControl;

    constructor(public navCtrl : NavController, public navParams: NavParams,
        public events : Events, private formBuilder : FormBuilder) {
            // Create the form
            // Allow unspecified name and/or email to keep things
            // as simple as possible
            this.addForm = formBuilder.group({
                name: [''],
                email: [''],
            })
    }

    buttonClicked(){
        // Trigger an event when a contact is added
        this.events.publish('contact:added', this.addForm.value);
        this.navCtrl.pop();
    }
}
