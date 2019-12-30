# Angular 8 summary

The goal of this project is to centralise some how-tos using angular. As this is not a technology I'm using on a daily basis, this repo, should help me to get back on track quickly.  It illustrates some implementation practices used in different project, and from practices coming from http://angular.io and other web source like stackoverflow.

The application is served via a simple python flask app, see [this section](#python-flask-server-development) from some explanations.

## Must read

* [https://angular.io/tutorial](https://angular.io/tutorial)
*

## Installation

Install last version of Angular CLI

```shell
sudo npm install -g @angular/cli@latest
# Add to path:
export PATH=$PATH;~/.nvm/versions/node/v8.9.4/lib/node_modules/node/lib/node_modules/node/bin
```

## angular App Development 

### Development server locally

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

## Python Flask Server Development

The folder `angularApp` includes a python flask and an angular SPA. The angular SPA was created using `ng new angularApp`. The package.json was modified to specify the output directory when compiling typescript to js should be the static folder:

```
"build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
    "outputPath": "static",
```

So now any `ng build` compile the SPA for python Flask to serve. The flask app is angularApp.py and it render the index.html:

```
@app.route("/")
def hello():
    return render_template('index.html')
```

## Continuous deployment

Using Git Action, the workflow (.github/workflows/dockerbuild.yaml) builds a docker image for the app. See [this article on github.com](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow) to setup a workflow.

The triggering event is a push to the repository. It uses the github-hosted ubuntu runner. Each job in a workflow executes in a fresh instance of the virtual environment, and steps within a job can share information using the filesystem.

The workflow uses a set of secrets to connect to dockerhub and github:

```shell
DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
DOCKER_REPOSITORY: ${{ secrets.DOCKER_REPOSITORY }}
DOCKER_IMAGE: ${{ secrets.DOCKER_IMAGE }}
GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

and build the docker image and push it under the jbcodeforce user.

## Module and declarations

The purpose of a NgModule is to declare each thing you create in Angular, and groups them together.

* declarations is for things you’ll use in your templates: mainly components.
* providers is for service declarations:
  * declarations / components are in local scope (private visibility),
  * providers / services are (generally) in global scope (public visibility)

Components are only usable in the current module. If you need to use them outside the module, line in other modules, you’ll have to export them. In the module below the components are declared and also exported as they are at the application global scope.

```
declarations: [
    InputComponent,
    DropdownComponent,
    MessageErrorComponent,
    FileUploadComponent
],
providers: [
  FileUploadService,
],
exports: [
    InputComponent,
    DropdownComponent,
    MessageErrorComponent,
    FileUploadComponent
]
```

On the contrary, **services** you provided will generally be available / injectable anywhere in your app, in all modules.
When assessing the import of module, you need to consider:

* if the module is imported for components, you’ll need to import it in each module needing them,
* if the module is imported for services, you’ll need to import it only once, in the first app module.
Modules to import each time you need them:
* common module except in the first app module, because it’s already part of the BrowserModule.
* FormsModule / ReactiveFormsModule
* MatXModule and other UI modules
* any other module giving you components, directives or pipes
Modules to import only once
* HttpClientModule
* BrowserAnimationsModule or NoopAnimationsModule
* any other module providing you services only.


### Example of login module

See the note [here](./dev-login.md)

### HttpClient

https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b

### Attribute binding

When to use <element [attribute]=""  versus attribute2=""
https://stackoverflow.com/questions/39112904/property-binding-vs-attribute-interpolation
