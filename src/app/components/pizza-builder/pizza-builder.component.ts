import { Component, OnInit  } from '@angular/core';
import { CostCalculatorService } from '../../services/costcalculator/cost-calculator.service';
import { OrderHandlerService } from '../../services/placeOrderHandler/order-handler.service';
import { PizzaOrder } from '../../models/pizzaorder.interface';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';

@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrl: './pizza-builder.component.css'
})

export class PizzaBuilderComponent implements OnInit {
  selectedSauce: string = 'Tomato';
  selectedCheese: string = 'Cheddar';
  selectedToppings: string[] = ["Onions"];
  selectedCrustSize: string = 'Small';
  selectedDietOptions: string = 'Vegetarian';
  totalCost: number = 0;

  orderId: string | null = null;
  orderPlaced: boolean = false;

  constructor(private pizzaOptionsService: PizzaSelectedOptionsService, private costCalculatorService: CostCalculatorService, private orderService: OrderHandlerService) { }

  ngOnInit(): void {
    this.pizzaOptionsService.selectedOptions$.subscribe(() => {
      this.calculateTotalCost(); // Calculate total cost whenever selections change
    });

    this.pizzaOptionsService.getDefaultOptions().subscribe(defaultOptions => {
      this.pizzaOptionsService.updateSelectedOptions(defaultOptions);
      this.calculateTotalCost();
    });
  }

  calculateTotalCost(): void {
    this.pizzaOptionsService.selectedOptions$.subscribe(selectedOptions => {
      this.totalCost = this.costCalculatorService.calculateTotalPrice(selectedOptions);
    });
  }

  placeOrder(): void {
    const pizzaOrder: PizzaOrder = {
      orderId: '',
      userName: 'Prashant Bajpai', // Get username from user input or authentication
      userEmail: 'prashantbajpai6492@gmail.com', // Get user email from user input or authentication
      type: this.selectedDietOptions,
      sauce: this.selectedSauce,
      cheese: this.selectedCheese,
      crustSize: this.selectedCrustSize,
      toppings: this.selectedToppings,
      totalCost: this.totalCost,
      status: 'Pending' // Set default status
    };
    this.orderId = this.orderService.placeOrder(pizzaOrder);
    this.orderPlaced = true;
    this.resetSelections();
  }

  resetSelections(): void {
    this.totalCost = 0;
  }
}