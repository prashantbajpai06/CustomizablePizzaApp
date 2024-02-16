import { Component } from '@angular/core';

@Component({
  selector: 'app-diet-options',
  templateUrl: './diet-options.component.html',
  styleUrls: ['./diet-options.component.css']
})
export class DietOptionsComponent {
  selectedDiet: string = ''; // 'vegetarian' or 'nonvegetarian'

  updateSelectedDiet(diet: string): void {
    this.selectedDiet = diet;
  }
}
