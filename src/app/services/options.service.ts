// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

// export class OptionsService {
//   crustSizes: { type: string, cost: number }[] = [
//     { type: 'Small', cost: 8 },
//     { type: 'Medium', cost: 10 },
//     { type: 'Large', cost: 12 }
//   ];

//   sauces: { type: string, cost: number }[] = [
//     { type: 'Tomato', cost: 0 },
//     { type: 'Pesto', cost: 1 },
//     { type: 'Alfredo', cost: 1.5 }
//   ];

//   cheeses: { type: string, cost: number }[] = [
//     { type: 'Mozzarella', cost: 1 },
//     { type: 'Cheddar', cost: 3 },
//     { type: 'Parmesan', cost: 4 }
//   ];

//   toppings: { type: string, cost: number }[] = [
//     { type: 'Pepperoni', cost: 1 },
//     { type: 'Mushrooms', cost: 0.5 },
//     { type: 'Onions', cost: 0.5 },
//     { type: 'Sausage', cost: 1 },
//     { type: 'Bacon', cost: 1.5 },
//     { type: 'Extra cheese', cost: 1 }
//   ];

//   selectedCrustSize: string = '';
//   selectedSauce: string = '';
//   selectedCheese: string = '';
//   selectedToppings: string[] = [];

//   constructor() { }

//   getCrustSizes(): { type: string, cost: number }[] {
//     return this.crustSizes;
//   }

//   getSauces(): { type: string, cost: number }[] {
//     return this.sauces;
//   }

//   getCheeses(): { type: string, cost: number }[] {
//     return this.cheeses;
//   }

//   getToppings(): { type: string, cost: number }[] {
//     return this.toppings;
//   }

//   setSelectedCrustSize(size: string): void {
//     this.selectedCrustSize = size;
//   }

//   setSelectedSauce(sauce: string): void {
//     this.selectedSauce = sauce;
//   }

//   setSelectedCheese(cheese: string): void {
//     this.selectedCheese = cheese;
//   }

//   addTopping(topping: string): void {
//     this.selectedToppings.push(topping);
//   }

//   removeTopping(topping: string): void {
//     this.selectedToppings = this.selectedToppings.filter(item => item !== topping);
//   }

//   resetSelections(): void {
//     // Reset selected options to their initial state
//     this.selectedCrustSize = '';
//     this.selectedSauce = '';
//     this.selectedCheese = '';
//     this.selectedToppings = [];
//   }
// }