import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  crustSizes: { size: string, cost: number }[] = [
    { size: 'Small', cost: 8 },
    { size: 'Medium', cost: 10 },
    { size: 'Large', cost: 12 }
  ];

  sauces: { type: string, cost: number }[] = [
    { type: 'Tomato', cost: 0 },
    { type: 'Pesto', cost: 1 },
    { type: 'Alfredo', cost: 1.5 }
  ];

  cheeses: { type: string, cost: number }[] = [
    { type: 'Mozzarella', cost: 0 },
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

  selectedCrustSize: string = '';
  selectedSauce: string = '';
  selectedCheese: string = '';
  selectedToppings: string[] = [];

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

  setSelectedCrustSize(size: string): void {
    this.selectedCrustSize = size;
  }

  setSelectedSauce(sauce: string): void {
    this.selectedSauce = sauce;
  }

  setSelectedCheese(cheese: string): void {
    this.selectedCheese = cheese;
  }

  addTopping(topping: string): void {
    this.selectedToppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.selectedToppings = this.selectedToppings.filter(item => item !== topping);
  }

  resetSelections(): void {
    // Reset selected options to their initial state
    this.selectedCrustSize = '';
    this.selectedSauce = '';
    this.selectedCheese = '';
    this.selectedToppings = [];
  }

  calculateTotalPrice(): number {
    let total = 0;
    if (this.selectedCrustSize) {
      total += this.crustSizes.find(crust => crust.size === this.selectedCrustSize)?.cost || 0;
    }
    if (this.selectedSauce) {
      total += this.sauces.find(sauce => sauce.type === this.selectedSauce)?.cost || 0;
    }
    if (this.selectedCheese) {
      total += this.cheeses.find(cheese => cheese.type === this.selectedCheese)?.cost || 0;
    }
    this.selectedToppings.forEach(topping => {
      const toppingCost = this.toppings.find(item => item.type === topping)?.cost || 0;
      total += toppingCost;
    });
    return total;
  }
}