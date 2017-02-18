/* Modal dialog that displays a grid of icons. When the user clicks an
icon, the dialog closes and the contact's icon is changed.
*/

import { Component  } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-choose-icon',
    templateUrl: 'chooseIcon.html',
})
export class ChooseIconPage {

    contact;
    allIcons = [
        ['person', 'baseball', 'football', 'basket', 'basketball'],
        ['beer', 'bicycle', 'bowtie', 'brush', 'color-palette']
    ];

    constructor(public viewCtrl: ViewController,
        public params: NavParams) {
        this.contact = this.params.get('contact');
    }

    iconClicked(icon) {
        this.contact.icon = icon;
        this.viewCtrl.dismiss();
    }

}
