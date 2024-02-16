import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service';

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

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
    // Fetch sauces from service
    this.sauces = this.optionsService.getSauces();
     // Set default sauce
     this.selectedSauce = this.sauces[0].type; // Assuming the first sauce is the default
  }

  // Method to update selected sauce
  updateSelectedSauce(): void {
    // Update sauce selection in service
    this.optionsService.setSelectedSauce(this.selectedSauce);
  }
}
