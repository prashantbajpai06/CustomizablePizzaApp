import { Component,EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-options',
  templateUrl: './diet-options.component.html',
  styleUrls: ['./diet-options.component.css']
})
export class DietOptionsComponent {
  selectedDiet: string = 'vegetarian'; // 'vegetarian' or 'nonvegetarian'
  @Output() dietSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  updateSelectedDiet(diet: string): void {
    this.selectedDiet = diet;
    this.dietSelected.emit(this.selectedDiet);
  }
}
