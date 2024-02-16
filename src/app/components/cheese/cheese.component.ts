import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {
  cheeses: { type: string, cost: number }[] = [];
  selectedCheese: string = '';

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
    // Fetch cheese options from service
    this.cheeses = this.optionsService.getCheeses();
    // Set default selected cheese
    this.selectedCheese = this.cheeses[0].type; // Assuming the first cheese is the default
  }

  // Method to update selected cheese
  updateSelectedCheese(): void {
    // Update cheese selection in service
    this.optionsService.setSelectedCheese(this.selectedCheese);
  }
}
