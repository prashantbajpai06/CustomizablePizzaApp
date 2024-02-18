import { TestBed } from '@angular/core/testing';
import { CostCalculatorService } from './cost-calculator.service';
import { OptionsDataService } from '../pizzaOptionsDataService/options-data.service';

describe('CostCalculatorService', () => {
  let service: CostCalculatorService;
  let mockOptionsDataService: jasmine.SpyObj<OptionsDataService>;

  beforeEach(() => {
    mockOptionsDataService = jasmine.createSpyObj('OptionsDataService', ['getCrustSizes', 'getSauces', 'getCheeses', 'getToppings']);

    TestBed.configureTestingModule({
      providers: [
        CostCalculatorService,
        { provide: OptionsDataService, useValue: mockOptionsDataService }
      ]
    });
    service = TestBed.inject(CostCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total price correctly', () => {
    const options = {
      crustSize: 'Medium',
      sauce: 'Tomato',
      cheese: 'Mozzarella',
      toppings: ['Pepperoni', 'Mushrooms']
    };

    mockOptionsDataService.getCrustSizes.and.returnValue([
      { size: 'Small', cost: 8 },
      { size: 'Medium', cost: 10 },
      { size: 'Large', cost: 12 }
    ]);

    mockOptionsDataService.getSauces.and.returnValue([
      { type: 'Tomato', cost: 0 },
      { type: 'Pesto', cost: 1 },
      { type: 'Alfredo', cost: 1.5 }
    ]);

    mockOptionsDataService.getCheeses.and.returnValue([
      { type: 'Mozzarella', cost: 0 },
      { type: 'Cheddar', cost: 1 },
      { type: 'Parmesan', cost: 1.5 }
    ]);

    mockOptionsDataService.getToppings.and.returnValue([
      { type: 'Pepperoni', cost: 1 },
      { type: 'Mushrooms', cost: 0.5 },
      { type: 'Onions', cost: 0.5 }
    ]);

    const total = service.calculateTotalPrice(options);
    // Total cost should be 10 (Medium crust) + 0 (Tomato sauce) + 0 (Mozzarella cheese) + 1 (Pepperoni topping) + 0.5 (Mushrooms topping) = 11.5
    expect(total).toEqual(11.5);
  });
});