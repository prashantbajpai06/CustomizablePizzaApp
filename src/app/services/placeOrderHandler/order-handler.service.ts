import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaOrder } from '../../models/pizzaorder.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderHandlerService {
  private apiUrl = 'https://localhost:7126/api/orders/place-order';
  constructor(private http: HttpClient) { }

  placeOrder(order: PizzaOrder): string {
    // Generate a unique order ID
    const orderId = '123';
    order.orderId = orderId;
    this.postOrder(order).subscribe(
      (response) => {
        console.log('Order placed successfully:', response);
        // Store the response in a variable or perform further actions
      },
      (error) => {
        console.error('Error placing order:', error);
      }
    );
    return orderId;
  }

  postOrder(order: PizzaOrder): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  private generateOrderId(): string {
    // Generate a unique order ID (you can use a UUID library or a simple timestamp)
    return 'ORD-' + Math.floor(Math.random() * 1000000);
  }
}
