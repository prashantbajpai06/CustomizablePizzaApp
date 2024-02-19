import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SauceComponent } from './sauce.component';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import { PizzaHttpService } from "../../services/pizzaapi/pizza-api.service";
import { of, throwError } from 'rxjs';

describe('SauceComponent', () => {
  let component: SauceComponent;
  let fixture: ComponentFixture<SauceComponent>;
  let mockPizzaHttpService: jasmine.SpyObj<PizzaHttpService>;
  let mockPizzaOptionsService: jasmine.SpyObj<PizzaSelectedOptionsService>;

  beforeEach(async () => {
    mockPizzaHttpService = jasmine.createSpyObj('PizzaHttpService', ['fetchSauces']);
    mockPizzaOptionsService = jasmine.createSpyObj('PizzaSelectedOptionsService', ['updateSelectedOptions']);

    await TestBed.configureTestingModule({
      declarations: [ SauceComponent ],
      providers: [
        { provide: PizzaHttpService, useValue: mockPizzaHttpService },
        { provide: PizzaSelectedOptionsService, useValue: mockPizzaOptionsService }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch sauce options on init', () => {
    const sauces = [
      { type: 'Tomato', cost: 2 },
      { type: 'Pesto', cost: 1 },
      { type: 'Alfredo', cost: 1.5 }
    ];

    mockPizzaHttpService.fetchSauces.and.returnValue(of(sauces));

    fixture.detectChanges();

    expect(component.sauces).toEqual(sauces);
    expect(component.selectedSauce).toEqual('Tomato');
  });

  it('should emit sauce when selected', () => {
    const selectedSauce = 'Pesto';

    // Create a spy for sauceSelected.emit
   const emitSpy = spyOn(component.sauceSelected, 'emit');

    component.onSelectSauce(selectedSauce);

    expect(component.selectedSauce).toEqual(selectedSauce);
    expect(emitSpy).toHaveBeenCalledWith(selectedSauce);
    expect(component.sauceSelected.emit).toHaveBeenCalledWith(selectedSauce);
    //expect(mockPizzaOptionsService.updateSelectedOptions).toHaveBeenCalledWith({ sauce: selectedSauce });
  });

  it('should handle error when fetching sauce', () => {
    const errorMessage = 'Error fetching sauce';
    mockPizzaHttpService.fetchSauces.and.returnValue(throwError(errorMessage));

    spyOn(console, 'error');

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith('Error fetching sauce:', errorMessage);
  });
});