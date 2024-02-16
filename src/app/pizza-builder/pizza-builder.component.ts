import { Component, OnInit  } from '@angular/core';
import { CostCalculatorService } from '../services/cost-calculator.service';
import { PizzaOptions } from '../models/pizza-selected-options.interface';

@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrl: './pizza-builder.component.css'
})

export class PizzaBuilderComponent implements OnInit {
  totalCost: number = 0;
  selectedDiet : string = '';

  selectedOptions: PizzaOptions = {
    selectedDiet: '',
    crustSize: '',
    sauce: '',
    cheese: '',
    toppings: []
  };

  orderId: string | null = null;
  orderPlaced: boolean = false;

  constructor(private costCalculatorService: CostCalculatorService) { }

  ngOnInit(): void {
  }

  onSelectCrustSize(size: string): void {
    this.selectedOptions.crustSize = size;
    this.calculateTotalCost();
  }

  onSelectSauce(sauce: string): void {
    this.selectedOptions.sauce = sauce;
    this.calculateTotalCost();
  }

  onSelectCheese(cheese: string): void {
    this.selectedOptions.cheese = cheese;
    this.calculateTotalCost();
  }

  onSelectToppings(toppings: string[]): void {
    this.selectedOptions.toppings = toppings;
    this.calculateTotalCost();
  }

  // // Method to handle selection of diet
  // onSelectDiet(diet: string): void {
  //   this.optionsService.setSelectedDiet(diet);
  //   this.calculateTotalPrice(); // Update total cost after selecting diet
  // }

  calculateTotalCost(): void {
    this.totalCost = this.costCalculatorService.calculateTotalPrice(this.selectedOptions);
  }

  

  // Method to place the order
  placeOrder(): void {
    // Generate a unique order ID (you can use a UUID library or a simple timestamp)
    this.orderId = this.generateOrderId();

    // Reset selected options
    this.optionsService.resetSelections();
    this.selectedDiet = '';

    // Set the order placed flag to true
    this.orderPlaced = true;
  }

  // Method to generate a unique order ID (you can replace this with your actual implementation)
  generateOrderId(): string {
    return 'ORD-' + Math.floor(Math.random() * 1000000);
  }
}