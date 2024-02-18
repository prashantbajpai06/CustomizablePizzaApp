import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  setItem(key: string, value: any, expirationHours: number = 24): void {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + expirationHours * 60 * 60 * 1000 // Convert hours to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
}