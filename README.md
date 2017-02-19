# ionic-contacts
Author: Sam Magura

A super simple contact management app I used to learn the Ionic framework.

## Features

View a list of your contacts:

<img width="345" alt="home" src="https://cloud.githubusercontent.com/assets/801549/23098188/435d6f5a-f616-11e6-8494-7fc65a6e6fbe.png">

Pressing the X icon deletes the contact. Pressing the + icon at the bottom of the screen takes the user to the Add Contact page:

<img width="353" alt="add_contact" src="https://cloud.githubusercontent.com/assets/801549/23098189/4480eda8-f616-11e6-9b85-aacb90b6a178.png">

The Add Contact and Home pages of the app communicate via Ionic's event framework. Tapping a contact's icon brings up a modal where you can choose a new icon for that contact:

<img width="341" alt="choose_icon" src="https://cloud.githubusercontent.com/assets/801549/23098190/4598b360-f616-11e6-8bcf-9a2ae0ff8068.png">

If I were to make this into a fully-functional app, I would write a backend that exposes a REST API and allows the contacts to be stored in a database.
