import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CheeseComponent } from './cheese.component';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import { PizzaHttpService } from "../../services/pizzaapi/pizza-api.service";
import { of, throwError } from 'rxjs';

describe('CheeseComponent', () => {
  let component: CheeseComponent;
  let fixture: ComponentFixture<CheeseComponent>;
  let mockPizzaHttpService: jasmine.SpyObj<PizzaHttpService>;
  let mockPizzaOptionsService: jasmine.SpyObj<PizzaSelectedOptionsService>;

  beforeEach(async () => {
    mockPizzaHttpService = jasmine.createSpyObj('PizzaHttpService', ['fetchCheeses']);
    mockPizzaOptionsService = jasmine.createSpyObj('PizzaSelectedOptionsService', ['updateSelectedOptions']);

    await TestBed.configureTestingModule({
      declarations: [ CheeseComponent ],
      providers: [
        { provide: PizzaHttpService, useValue: mockPizzaHttpService },
        { provide: PizzaSelectedOptionsService, useValue: mockPizzaOptionsService }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cheese options on init', () => {
    const cheeses = [
      { type: 'Mozzarella', cost: 0 },
      { type: 'Cheddar', cost: 1 },
      { type: 'Parmesan', cost: 1.5 }
    ];

    mockPizzaHttpService.fetchCheeses.and.returnValue(of(cheeses));

    fixture.detectChanges();

    expect(component.cheeses).toEqual(cheeses);
    expect(component.selectedCheese).toEqual('Mozzarella');
  });

  it('should emit cheese when selected', () => {
    const selectedCheese = 'Cheddar';
    // Create a spy for sauceSelected.emit
   const emitSpy = spyOn(component.cheeseSelected, 'emit');

    component.onSelectCheese(selectedCheese);

    expect(component.selectedCheese).toEqual(selectedCheese);
    expect(emitSpy).toHaveBeenCalledWith(selectedCheese);
    //expect(component.cheeseSelected.emit).toHaveBeenCalledWith(selectedCheese);
    //expect(mockPizzaOptionsService.updateSelectedOptions).toHaveBeenCalledWith({ cheese: selectedCheese });
  });

  it('should handle error when fetching cheese', () => {
    const errorMessage = 'Error fetching cheese';
    mockPizzaHttpService.fetchCheeses.and.returnValue(throwError(errorMessage));

    spyOn(console, 'error');

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith('Error fetching cheese:', errorMessage);
  });
});