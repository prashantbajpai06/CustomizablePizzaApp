import { TestBed } from '@angular/core/testing';

import { PizzaSelectedOptionsService } from './pizza-selected-options.service';

describe('PizzaSelectedOptionsService', () => {
  let service: PizzaSelectedOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaSelectedOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
