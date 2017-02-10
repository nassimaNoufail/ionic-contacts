
// http://stackoverflow.com/questions/36312635/how-to-pass-parameters-in-pop-method-of-ionic2

import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { NavController, NavParams, Events } from 'ionic-angular';

import { HomePage } from '../home/home';

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
        this.events.publish('contact:added', this.addForm.value);
        this.navCtrl.pop();
    }
}
