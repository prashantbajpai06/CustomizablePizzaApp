import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OptionsDataService {
  crustSizes: { size: string, cost: number }[] = [
    { size: 'Small', cost: 8 },
    { size: 'Medium', cost: 10 },
    { size: 'Large', cost: 12 }
  ];

  sauces: { type: string, cost: number }[] = [
    { type: 'Tomato', cost: 2 },
    { type: 'Pesto', cost: 1 },
    { type: 'Alfredo', cost: 1.5 }
  ];

  cheeses: { type: string, cost: number }[] = [
    { type: 'Mozzarella', cost: 1 },
    { type: 'Cheddar', cost: 1 },
    { type: 'Parmesan', cost: 1.5 }
  ];

  toppings: { type: string, cost: number }[] = [
    { type: 'Pepperoni', cost: 1 },
    { type: 'Mushrooms', cost: 0.5 },
    { type: 'Onions', cost: 0.5 },
    { type: 'Sausage', cost: 1 },
    { type: 'Bacon', cost: 1.5 },
    { type: 'Extra cheese', cost: 1 }
  ];

  constructor() { }

  getCrustSizes(): { size: string, cost: number }[] {
    return this.crustSizes;
  }

  getSauces(): { type: string, cost: number }[] {
    return this.sauces;
  }

  getCheeses(): { type: string, cost: number }[] {
    return this.cheeses;
  }

  getToppings(): { type: string, cost: number }[] {
    return this.toppings;
  }
}