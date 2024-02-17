# MyNewPizzaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

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

**Sequence Diagram: Place Order**

1. Customer sends a "Place Order" request from the Angular Frontend.
2. Angular Frontend forwards the request to the .NET Backend API.
3. .NET Backend API receives the "Place Order" request.
4. .NET Backend API validates the request and processes it.
5. .NET Backend API interacts with the FileSystem to store the order details.
6. FileSystem stores the order information.
7. .NET Backend API sends a response to the Angular Frontend indicating successful order placement.
8. Angular Frontend receives the response and updates the UI to display a confirmation message.
9. PizzaDelivery worker will pick the completed order and set the status as Delievered.

**Design Pattern: Used**
1. Builder Design Pattern (For creating and customizing pizza orders in your application)
2. Factory Design Pattern (Creational) for getting pizza objects from Factory like Veg or Non veg pizza
3. Singleton Design Pattern (to create single instance)
4. MVC Pattern (Architectural):
5. Dependency Injection (DI) Pattern (Behavioral):
6. Observer Pattern (Behavioral):
7. Component Pattern (Structural):


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
