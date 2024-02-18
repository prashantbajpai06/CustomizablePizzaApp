import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderTrackingComponent } from './order-tracking.component';
import { PizzaHttpService } from "../../services/pizzaapi/pizza-api.service";
import { of, throwError } from 'rxjs';

describe('OrderTrackingComponent', () => {
  let component: OrderTrackingComponent;
  let fixture: ComponentFixture<OrderTrackingComponent>;
  let mockPizzaHttpService: jasmine.SpyObj<PizzaHttpService>;

  beforeEach(async () => {
    mockPizzaHttpService = jasmine.createSpyObj('PizzaHttpService', ['fetchOrderstatus']);

    await TestBed.configureTestingModule({
      declarations: [ OrderTrackingComponent ],
      providers: [
        { provide: PizzaHttpService, useValue: mockPizzaHttpService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch order status', () => {
    const orderId = '123';
    const status = 'In Progress';

    mockPizzaHttpService.fetchOrderstatus.and.returnValue(of(status));

    component.orderId = orderId;
    component.trackOrder();

    expect(mockPizzaHttpService.fetchOrderstatus).toHaveBeenCalledWith(orderId);
    expect(component.orderStatus).toEqual(status);
  });

  it('should handle error when fetching order status', () => {
    const orderId = '123';
    const errorMessage = 'Error fetching order status';

    mockPizzaHttpService.fetchOrderstatus.and.returnValue(throwError(errorMessage));

    spyOn(console, 'error');

    component.orderId = orderId;
    component.trackOrder();

    expect(mockPizzaHttpService.fetchOrderstatus).toHaveBeenCalledWith(orderId);
    expect(console.error).toHaveBeenCalledWith('Error fetching order status:', errorMessage);
    expect(component.orderStatus).toBeNull();
  });
});
