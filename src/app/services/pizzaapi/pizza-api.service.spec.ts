import { TestBed } from '@angular/core/testing';
import { PizzaHttpService } from './pizza-api.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('PizzaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule], // Add HttpClientModule to imports
    providers: [PizzaHttpService]
  }));

  it('should be created', () => {
    const service: PizzaHttpService = TestBed.get(PizzaHttpService);
    expect(service).toBeTruthy();
  });
});
