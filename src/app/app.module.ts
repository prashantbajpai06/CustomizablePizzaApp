import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaBuilderComponent } from './components/pizza-builder/pizza-builder.component';
import { SauceComponent } from './components/sauce/sauce.component';
import { CrustSizeComponent } from './components/crust-size/crust-size.component';
import { CheeseComponent } from './components/cheese/cheese.component';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { DietOptionsComponent } from './components/diet-options/diet-options.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaBuilderComponent,
    SauceComponent,
    CrustSizeComponent,
    CheeseComponent,
    ToppingsComponent,
    DietOptionsComponent,
    OrderTrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
