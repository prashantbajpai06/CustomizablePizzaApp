import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import {PizzaHttpService} from "../../services/pizzaapi/pizza-api.service"
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {
  toppings: { type: string, cost: number }[] = [];
  selectedToppings: { [key: string]: boolean } = {};
  @Output() toppingsSelected: EventEmitter<{[key: string]: boolean }> = new EventEmitter<{ [key: string]: boolean }>();

  constructor(private pizzaOptionsService: PizzaSelectedOptionsService, private pizzaHttpService: PizzaHttpService) { }

  ngOnInit(): void {
    this.fetchtoppings();
  }

  fetchtoppings(): void {
    this.pizzaHttpService.fetchToppings().subscribe(
      (response) => {
        console.log('toppings options:', response);
        this.toppings = response;
      },
      (error) => {
        console.error('Error fetching Toppings:', error);
      }
    );
  }

  onSelectTopping(event: any, toppingType: string): void {
    this.selectedToppings[toppingType] = event.target.checked;
    this.toppingsSelected.emit(this.selectedToppings);
    const selectedOptions = { toppings: Object.keys(this.selectedToppings).filter(key => this.selectedToppings[key]) };
    this.pizzaOptionsService.updateSelectedOptions(selectedOptions);
  }
}