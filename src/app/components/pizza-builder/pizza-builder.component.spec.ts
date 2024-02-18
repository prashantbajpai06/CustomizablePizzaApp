import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaBuilderComponent } from './pizza-builder.component';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import { CostCalculatorService } from '../../services/costcalculator/cost-calculator.service';
import { OrderHandlerService } from '../../services/placeOrderHandler/order-handler.service';
import { of } from 'rxjs';

describe('PizzaBuilderComponent', () => {
  let component: PizzaBuilderComponent;
  let fixture: ComponentFixture<PizzaBuilderComponent>;
  let mockPizzaOptionsService: jasmine.SpyObj<PizzaSelectedOptionsService>;
  let mockCostCalculatorService: jasmine.SpyObj<CostCalculatorService>;
  let mockOrderHandlerService: jasmine.SpyObj<OrderHandlerService>;

  beforeEach(async () => {
    mockPizzaOptionsService = jasmine.createSpyObj('PizzaSelectedOptionsService', ['selectedOptions$', 'getDefaultOptions', 'updateSelectedOptions']);
    mockCostCalculatorService = jasmine.createSpyObj('CostCalculatorService', ['calculateTotalPrice']);
    mockOrderHandlerService = jasmine.createSpyObj('OrderHandlerService', ['placeOrder']);

    await TestBed.configureTestingModule({
      declarations: [ PizzaBuilderComponent ],
      providers: [
        { provide: PizzaSelectedOptionsService, useValue: mockPizzaOptionsService },
        { provide: CostCalculatorService, useValue: mockCostCalculatorService },
        { provide: OrderHandlerService, useValue: mockOrderHandlerService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaBuilderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total cost on initialization', () => {
    const defaultOptions = {
      sauce: 'Tomato',
      cheese: 'Mozzarella',
      crustSize: 'Medium',
      toppings: ['Pepperoni', 'Mushrooms'],
      selectedDiet: 'Vegetarian'
    };
    const totalPrice = 12.5;

    mockPizzaOptionsService.getDefaultOptions.and.returnValue(of(defaultOptions));
    mockCostCalculatorService.calculateTotalPrice.and.returnValue(totalPrice);

    fixture.detectChanges();

    expect(mockPizzaOptionsService.updateSelectedOptions).toHaveBeenCalledWith(defaultOptions);
    expect(mockCostCalculatorService.calculateTotalPrice).toHaveBeenCalledWith(defaultOptions);
    expect(component.totalCost).toEqual(totalPrice);
  });

  // need to write more tests for other methods such as onSauceSelected, onCheeseSelected, placeOrder, etc.
});