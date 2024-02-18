import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root'
})

export class PizzaHttpService {
  private apiUrl = 'https://localhost:7126/api/PizzaOptionsUI';

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

  fetchOrderstatus(orderid: string): Observable<string> {
    const url = `${this.apiUrl}/OrderStatus`;
    return this.http.get<string>(url);
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