import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaBuilderComponent } from './pizza-builder/pizza-builder.component';

const routes: Routes = [
  { path: 'pizza-builder', component: PizzaBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
