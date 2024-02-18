import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import {PizzaHttpService} from "../../services/pizzaapi/pizza-api.service"

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})

export class CheeseComponent implements OnInit {
  cheeses: { type: string, cost: number }[] = [];
  selectedCheese: string = '';
  @Output() cheeseSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private pizzaOptionsService: PizzaSelectedOptionsService, private pizzaHttpService: PizzaHttpService) { }

  ngOnInit(): void {
    this.fetchCheese();
  }

  fetchCheese(): void {
    this.pizzaHttpService.fetchCheeses().subscribe(
      (response) => {
        console.log('Cheese options:', response);
        this.cheeses = response;
        // Set default selected cheese after fetching the data
        if (this.cheeses.length > 0) {
          this.selectedCheese = this.cheeses[0].type;
        }
      },
      (error) => {
        console.error('Error fetching cheese:', error);
      }
    );
  }

  onSelectCheese(cheese: string): void {
    this.selectedCheese = cheese;
    this.cheeseSelected.emit(this.selectedCheese);
    const selectedOptions = { cheese: cheese};
    this.pizzaOptionsService.updateSelectedOptions(selectedOptions);
  }
}
