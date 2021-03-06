# Angular Sandbox

The goal of this project is to centralise some how-tos using angular. As this is not a technology I'm using on a daily basis, this repo, should help me to get back on track quickly.  It illustrates some implementation practices used in different project, and from practices coming from http://angular.io and other web source like stackoverflow.

## Keep angular up to date

Here are a set of commands to change angular CLI at the global level:

```shell
# test current version outside of any angular project
ng --version
sudo npm uninstall -g @angular/cli
# clear the npm cache
sudo npm cache verify
sudo npm cache clean
sudo npm install -g @angular/cli@latest
```

And then update an existing project:

```shell
ng update @angular/core
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) with the command `ng new angular-sandbox`.

## Items covered

* enforce login page (see how the login page was developed [here]())
* home page to have a list of features as tiles which is a shared object
* enhanced input element with validation rules
* present a map with leaflet javascript library and marker loaded from a backend. This is also illustrating that we do not need BFF.  (See features/mapdemo) and summary [here](./docs/basic-app.md#map-with-leaflet)
* busy component TBD

## Getting Started

In the note [here](./docs/basic-app.md) we go over the basic structure , common part of a single page application.

## Development - Build

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build Angular App

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test --singleRun=false` to execute the unit tests via [Karma](https://karma-runner.github.io) without stopping, so any change to the tests will run immediately.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
