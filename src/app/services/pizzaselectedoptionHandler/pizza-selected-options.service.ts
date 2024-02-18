import { Injectable } from '@angular/core';
import { of , BehaviorSubject, Observable } from 'rxjs';
import { PizzaOptions } from '../../models/pizza-selected-options.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaSelectedOptionsService {

  private _selectedOptions$: BehaviorSubject<PizzaOptions> = new BehaviorSubject<PizzaOptions>({
    selectedDiet: '',
    crustSize: '',
    sauce: '',
    cheese: '',
    toppings: []
  });

  // Expose the selectedOptions$ as an observable
  selectedOptions$: Observable<PizzaOptions> = this._selectedOptions$.asObservable();

  // Method to update selected options
  updateSelectedOptions(selectedOptions: Partial<PizzaOptions>): void {
    const currentOptions = this._selectedOptions$.getValue();
    const updatedOptions = { ...currentOptions, ...selectedOptions };
    this._selectedOptions$.next(updatedOptions);
  }

  getDefaultOptions(): Observable<PizzaOptions> {
    const defaultOptions: PizzaOptions = {
      selectedDiet: 'Vegetarian',
      crustSize: 'Small',
      sauce: 'Tomato',
      cheese: 'Mozzarella',
      toppings: ['']
    };
    return of(defaultOptions);
  }
}
