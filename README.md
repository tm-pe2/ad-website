# AdFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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


## Creating a web page

To create a web page in angular we need to create a component and add it to the routing.
Start off by generating a component with a name you want

`ng generate component component-name`

Now navigate to `app-routing.module.ts` In src/app
In this file you will see a structure like this
```ts
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
```

To add your route, add a new object in the array for example:

`{path: 'component-name', component: NewComponent}`

If you are using vscode, the component will be automatically imported, if not at the top of the file you will have to add:

`import { NewComponent } from './component-name/new.component';`

Run `ng serve` to start the local web server and browse to `localhost:4200`
Adding your route to the end of this like: `localhost:4200/component-name` will browse to your new page
This page will display `component-name works!` if you did everything correctly, you can now start creating your page in this component!
