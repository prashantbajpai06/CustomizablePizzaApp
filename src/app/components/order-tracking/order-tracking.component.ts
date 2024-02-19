import { Component } from '@angular/core';
import {PizzaHttpService} from "../../services/pizzaapi/pizza-api.service"

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrl: './order-tracking.component.css'
})
export class OrderTrackingComponent {
  orderStatus: string | null = null;
  orderId: string = '';

  constructor(private pizzaHttpService: PizzaHttpService){}

  trackOrder(): void {
    this.pizzaHttpService.fetchOrderstatus(this.orderId).subscribe(
      (response) => {
        console.log('Response:', response);
        this.orderStatus = response.status;
        console.log(this.orderStatus);
      },
      (error: any) => {
        console.error('Error fetching order status:', error);
        // Handle error (e.g., display an error message)
      }
    );
  }
}
