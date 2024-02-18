import { TestBed } from '@angular/core/testing';
import { CacheService } from './cache.service';

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get data from the cache', () => {
    const key = 'testKey';
    const value = 'testValue';

    // Set data in the cache
    service.setItem(key, value);

    // Get data from the cache
    const retrievedValue = service.getItem(key);

    // Expect the retrieved value to be equal to the original value
    expect(retrievedValue).toEqual(value);
  });

  it('should return null if data not found in cache', () => {
    const key = 'nonExistentKey';

    // Attempt to retrieve data from the cache
    const retrievedValue = service.getItem(key);

    // Expect the retrieved value to be null
    expect(retrievedValue).toBeNull();
  });
});
