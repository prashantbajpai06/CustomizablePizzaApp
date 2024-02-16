import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-crust-size',
  templateUrl: './crust-size.component.html',
  styleUrls: ['./crust-size.component.css']
})
export class CrustSizeComponent implements OnInit {
  @Output() crustSizeSelected: EventEmitter<string> = new EventEmitter<string>();
  crustSizes: { size: string, cost: number }[] = [];
  selectedCrustSize: string = '';

  constructor(private optionsService: OptionsService) { }

  ngOnInit(): void {
    // Fetch crust sizes from service
    this.crustSizes = this.optionsService.getCrustSizes();
    // Set default crust size
    this.selectedCrustSize = this.crustSizes[0].size; // Assuming the first size is the default
  }

  onSelectCrustSize(event: Event): void {
    const selectedSize = (event.target as HTMLSelectElement).value;
    this.crustSizeSelected.emit(selectedSize); // Emit the selected crust size
  }

  // Method to update selected crust size
  updateSelectedCrustSize(): void {
    // Update crust size selection in service
    this.optionsService.setSelectedCrustSize(this.selectedCrustSize);
  }
}