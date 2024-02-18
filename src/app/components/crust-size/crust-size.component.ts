import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import {PizzaHttpService} from "../../services/pizzaapi/pizza-api.service"

@Component({
  selector: 'app-crust-size',
  templateUrl: './crust-size.component.html',
  styleUrls: ['./crust-size.component.css']
})
export class CrustSizeComponent implements OnInit {
  @Output() crustSizeSelected: EventEmitter<string> = new EventEmitter<string>();
  crustSizes: { type: string, cost: number }[] = [];
  selectedCrustSize: string = '';

  constructor(private pizzaOptionsService: PizzaSelectedOptionsService, private pizzaHttpService: PizzaHttpService) { }

  ngOnInit(): void {
    this.fetchcrustSize();
  }

  fetchcrustSize(): void {
    this.pizzaHttpService.fetchCrustSizes().subscribe(
      (response) => {
        this.crustSizes = response;
        if (this.crustSizes.length > 0) {
          this.selectedCrustSize = this.crustSizes[0].type;
        }
      },
      (error) => {
        console.error('Error fetching crust sizes:', error);
      }
    );
  }

  onSelectCrustSize(size: string): void {
    this.selectedCrustSize = size;
    const selectedOptions = { crustSize: size };
    this.pizzaOptionsService.updateSelectedOptions(selectedOptions);
  }
}