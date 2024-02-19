import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CacheService } from '../cache/cache.service';
import { API_CONFIG } from '../../config';
import { Orders_CONFIG } from '../../config';
import { OrderStatusResponse } from '../../models/orderstatusresponse.interface';

@Injectable({
  providedIn: 'root'
})

export class PizzaHttpService {
  private apiUrl = API_CONFIG.apiUrl;

  constructor(private http: HttpClient, private cacheService: CacheService) { }

  fetchCrustSizes(): Observable<any[]> {
    const url = `${this.apiUrl}/crustsize`;
    return this.fetchWithCache(url);
  }

  fetchSauces(): Observable<any[]> {
    const url = `${this.apiUrl}/sauce`;
    return this.fetchWithCache(url);
  }

  fetchCheeses(): Observable<any[]> {
    const url = `${this.apiUrl}/cheese`;
    return this.fetchWithCache(url);
  }

  fetchToppings(): Observable<any[]> {
    const url = `${this.apiUrl}/toppings`;
    return this.fetchWithCache(url);
  }

  fetchOrderstatus(orderid: string): Observable<OrderStatusResponse> {
    const url = `${Orders_CONFIG.apiUrl}/${orderid}`;
    return this.http.get<OrderStatusResponse>(url);
  }

  private fetchWithCache(url: string): Observable<any[]> {
    const cachedData = this.cacheService.getItem(url);
    if (cachedData) {
      return of(cachedData);
    } else {
      return this.http.get<any[]>(url).pipe(
        map(data => {
          this.cacheService.setItem(url, data);
          return data;
        }),
        catchError(error => {
          throw error;
        })
      );
    }
  }
}