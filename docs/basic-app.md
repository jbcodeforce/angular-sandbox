# Basic Application Structure
In this section I address the following subject:
* [Main page Structure](#main-page)
* [Routing](#routing)
* [footer and header](#adding-footer-and-header)

## Main page
When creating the application with `ng new` command, the application is ready to run immediately with `ng serve`. But we want to add a home page, a login page, a standard header, footer and support internal routing, to do so we need to change the app.component.html to have just the page placeholders:
```html
<div class="container" style="position:relative;">
  <router-outlet></router-outlet>
</div>
```
We need to import the angular router in the app.module, but in fact it is better to isolate the main routing in its own module, and when a feature support page navigation it will define its own routes.

We need to add a home component with `ng g component features/home` that we will enhance later.

## Routing
* Add a routing module. with `ng g module features/routing`.
* Define a route to home in a separate file (routes.ts) so it can be imported in test module.

 ```javascript
 export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
 ];
 ```
* Add the routing definition in the routing module and export the RouterModule.

  ```javascript
  import { routes } from './routes';

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false
      }),
      CommonModule
    ],
    exports: [RouterModule],
  });
  ```

* Add the import RoutingModule in the main app Module
  ```javascript
  import { RoutingModule } from './features/routing/routing.module';
  imports: [
    BrowserModule,
    RoutingModule
  ],
  ```

## Adding footer and header
Any shared component are in shared folder.
* Create a shared module: `ng g module shared`
* Create footer and header components: `ng g component shared/header`
* Add those components in the export of the shared module
 ```javascript
     @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [HeaderComponent,
        FooterComponent],
      exports: [FooterComponent,
       HeaderComponent]
    })
 ```
* Add the SharedModule in the imports of the app module.

For each component we add basic jasmine tests on element presence within the component.

## Adding
