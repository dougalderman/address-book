# AddressBook

Simple online address book with a main and detail page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Brief Description

This project calls the API https://randomuser.me/ to get a list of 10 people to populate an address book. The main screen lists the 10 names and thumbnail photos. When the user clicks on a person, a detail page is shown with additional information returned from the API call, including photo, gender, phone number, email address, and postal address.

## Engineering Details

The API call is done in a service named AddressBookApiService. Because the API endpoint randomly returns a single user, 10 HTTP GET commands are combined into an array, and RXJS forkJoin() is used to combine them. Results from GET commands are mapped and reduced into a single array of ContactModel objects (ContactModel is an interface).

The main page displays a list of contact names and thumbnails. Clicking on a contact sends the user to the detail page via a routerLink command. AppRoutingModule specifies the two routes. The detail page shows additional information returned from the API call.

## Future Steps

The project could be improved by allowing the user to modify contact information in the detail page. This would require adding the users returned from the API call to a database table, and modifying the table. Endpoints would need to be created to access the database. A reactive form could be added to the detail page to allow for the user to change contact information. Adding new users to the database could also be allowed via the detail page. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
