import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {
  toppings: { type: string, cost: number }[] = [];
  selectedToppings: string[] = [];

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
    // Fetch toppings options from service
    this.toppings = this.optionsService.getToppings();
  }

  // Method to update selected toppings
  updateSelectedToppings(topping: string, event: any): void {
    if (event.target.checked) {
      // Add topping to selected toppings
      this.optionsService.addTopping(topping);
    } else {
      // Remove topping from selected toppings
      this.optionsService.removeTopping(topping);
    }
  }
}