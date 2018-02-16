import { TestBed, inject } from '@angular/core/testing';

import { OrderSocketService } from './order-socket.service';

describe('OrderSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderSocketService]
    });
  });

  it('should be created', inject([OrderSocketService], (service: OrderSocketService) => {
    expect(service).toBeTruthy();
  }));
});
