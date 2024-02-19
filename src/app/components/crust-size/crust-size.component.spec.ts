import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CrustSizeComponent } from './crust-size.component';
import { PizzaSelectedOptionsService } from '../../services/pizzaselectedoptionHandler/pizza-selected-options.service';
import { PizzaHttpService } from "../../services/pizzaapi/pizza-api.service";
import { of, throwError } from 'rxjs';

describe('CrustSizeComponent', () => {
  let component: CrustSizeComponent;
  let fixture: ComponentFixture<CrustSizeComponent>;
  let mockPizzaHttpService: jasmine.SpyObj<PizzaHttpService>;
  let mockPizzaOptionsService: jasmine.SpyObj<PizzaSelectedOptionsService>;

  beforeEach(async () => {
    mockPizzaHttpService = jasmine.createSpyObj('PizzaHttpService', ['fetchCrustSizes']);
    mockPizzaOptionsService = jasmine.createSpyObj('PizzaSelectedOptionsService', ['updateSelectedOptions']);

    await TestBed.configureTestingModule({
      declarations: [ CrustSizeComponent ],
      providers: [
        { provide: PizzaHttpService, useValue: mockPizzaHttpService },
        { provide: PizzaSelectedOptionsService, useValue: mockPizzaOptionsService }
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrustSizeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch crust sizes on init', () => {
    const crustSizes = [
      { type: 'Small', cost: 8 },
      { type: 'Medium', cost: 10 },
      { type: 'Large', cost: 12 }
    ];

    mockPizzaHttpService.fetchCrustSizes.and.returnValue(of(crustSizes));

    fixture.detectChanges();

    expect(component.crustSizes).toEqual(crustSizes);
    expect(component.selectedCrustSize).toEqual('Small');
  });

  it('should emit crust size when selected', () => {
    const selectedSize = 'Medium';

    const emitSpy = spyOn(component.crustSizeSelected, 'emit');

    component.onSelectCrustSize(selectedSize);

    expect(component.selectedCrustSize).toEqual(selectedSize);
    expect(emitSpy).toHaveBeenCalledWith(selectedSize);
    //expect(component.crustSizeSelected.emit).toHaveBeenCalledWith(selectedSize);
    //expect(mockPizzaOptionsService.updateSelectedOptions).toHaveBeenCalledWith({ crustSize: selectedSize });
  });

  it('should handle error when fetching crust sizes', () => {
    const errorMessage = 'Error fetching crust sizes';
    mockPizzaHttpService.fetchCrustSizes.and.returnValue(throwError(errorMessage));

    spyOn(console, 'error');

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith('Error fetching crust sizes:', errorMessage);
  });
});
