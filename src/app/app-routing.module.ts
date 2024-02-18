import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { PizzaBuilderComponent } from './components/pizza-builder/pizza-builder.component';

const routes: Routes = [
  { path: 'pizza-builder', component: PizzaBuilderComponent },
  { path: 'order-tracking', component: OrderTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
