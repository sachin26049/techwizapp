import { TestBed, inject } from '@angular/core/testing';

import { ChefSocketService } from './chef-socket.service';

describe('ChefSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChefSocketService]
    });
  });

  it('should be created', inject([ChefSocketService], (service: ChefSocketService) => {
    expect(service).toBeTruthy();
  }));
});
