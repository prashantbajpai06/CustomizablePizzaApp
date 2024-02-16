import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})

export class PizzaHttpService {
  private apiUrl = 'http://your-api-url/pizzas';

  constructor(private http: HttpClient) { }

  // Method to fetch all pizzas from the API
  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }

  // Method to fetch a single pizza by ID from the API
  getPizzaById(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/${id}`);
  }

  // Method to add a new pizza to the API
  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.apiUrl, pizza);
  }

  // Method to update an existing pizza in the API
  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.apiUrl}/${pizza.id}`, pizza);
  }

  // Method to delete a pizza from the API
  deletePizza(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}