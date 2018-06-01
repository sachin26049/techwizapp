import { TestBed, inject } from '@angular/core/testing';

import { AdminsocketService } from './adminsocket.service';

describe('AdminsocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminsocketService]
    });
  });

  it('should be created', inject([AdminsocketService], (service: AdminsocketService) => {
    expect(service).toBeTruthy();
  }));
});
