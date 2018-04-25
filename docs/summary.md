# Angular 5 summary
## Must read
* https://angular.io/tutorial
*
## Installation
```
```
## Module and declarations
The purpose of a NgModule is to declare each thing you create in Angular, and group them together.
* declarations is for things you’ll use in your templates: mainly components.
* providers is for services
declarations and providers do not have the same scope / visibility:
* declarations / components are in local scope (private visibility),
* providers / services are (generally) in global scope (public visibility)

Components you declared are only usable in the current module. If you need to use them outside, in other modules, you’ll have to export them. In the module below the components are declared and also exported as they are at the application global scope.
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


### HttpClient
https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b

### Attribute binding
When to use <element [attribute]=""  attribute2=""
https://stackoverflow.com/questions/39112904/property-binding-vs-attribute-interpolation
