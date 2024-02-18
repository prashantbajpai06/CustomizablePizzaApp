import { Component, OnInit } from '@angular/core';
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
  //Define property of Sauces array
  sauces: { type: string, cost: number }[] = [];
  //Hold selection value of sauce
  selectedSauce: string = '';

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
    const selectedOptions = { sauce: sauce };
    this.pizzaOptionsService.updateSelectedOptions(selectedOptions);
  }
}
