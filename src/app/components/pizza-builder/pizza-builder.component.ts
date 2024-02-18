import { Component, OnInit  } from '@angular/core';
import { CostCalculatorService } from '../../services/costcalculator/cost-calculator.service';
import { OrderHandlerService } from '../../services/placeOrderHandler/order-handler.service';
import { PizzaOptions } from '../../models/pizza-selected-options.interface';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';

@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrl: './pizza-builder.component.css'
})

export class PizzaBuilderComponent implements OnInit {
  totalCost: number = 0;
  orderId: string | null = null;
  orderPlaced: boolean = false;
  //selectedDiet : string = '';

  selectedOptions: PizzaOptions = {
    selectedDiet: '',
    crustSize: '',
    sauce: '',
    cheese: '',
    toppings: []
  };

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
    this.orderId = this.orderService.placeOrder();
    this.orderPlaced = true;
    this.resetSelections();
  }

  resetSelections(): void {
    this.selectedOptions.selectedDiet = '';
    this.selectedOptions.crustSize = '';
    this.selectedOptions.sauce = '';
    this.selectedOptions.cheese = '';
    this.selectedOptions.toppings = [];
    this.totalCost = 0;
  }
}