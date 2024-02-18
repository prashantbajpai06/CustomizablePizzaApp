import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import {PizzaHttpService} from "../../services/pizzaapi/pizza-api.service"

@Component({
  selector: 'app-sauce',
  templateUrl: './sauce.component.html',
  styleUrl: './sauce.component.css'
})

export class SauceComponent implements OnInit {
  sauces: { type: string, cost: number }[] = [];
  selectedSauce: string = '';
  @Output() sauceSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private pizzaOptionsService: PizzaSelectedOptionsService, private pizzaHttpService: PizzaHttpService) { }

  ngOnInit(): void {
    this.fetchSauces();
  }

  fetchSauces(): void {
    this.pizzaHttpService.fetchSauces().subscribe(
      (response) => {
        console.log('Sauce options:', response);
        this.sauces = response;
        if (this.sauces.length > 0) {
          this.selectedSauce = this.sauces[0].type;
        }
      },
      (error) => {
        console.error('Error fetching Sauces:', error);
      }
    );
  }

  onSelectSauce(sauce: string): void {
    this.selectedSauce = sauce;
    this.sauceSelected.emit(this.selectedSauce);
    const selectedOptions = { sauce: sauce };
    this.pizzaOptionsService.updateSelectedOptions(selectedOptions);
  }
}
