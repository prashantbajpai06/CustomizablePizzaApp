// cost-calculator.service.ts
import { Injectable } from '@angular/core';
import { OptionsDataService } from './options-data.service';
import { PizzaOptions } from '../models/pizza-selected-options.interface';

@Injectable({
  providedIn: 'root'
})

export class CostCalculatorService {
  constructor(private optionsDataService: OptionsDataService) {}

  calculateTotalPrice(options: PizzaOptions): number {
    let total = 0;
    const crustCost = this.optionsDataService.getCrustSizes().find(crust => crust.size === options.crustSize)?.cost || 0;
    const sauceCost = this.optionsDataService.getSauces().find(sauce => sauce.type === options.sauce)?.cost || 0;
    const cheeseCost = this.optionsDataService.getCheeses().find(cheese => cheese.type === options.cheese)?.cost || 0;
    total += crustCost + sauceCost + cheeseCost;

    options.toppings.forEach(topping => {
      const toppingCost = this.optionsDataService.getToppings().find(item => item.type === topping)?.cost || 0;
      total += toppingCost;
    });
    return total;
  }
}
