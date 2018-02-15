import { TestBed, inject } from '@angular/core/testing';

import { AdminmenuService } from './adminmenu.service';

describe('AdminmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminmenuService]
    });
  });

  it('should be created', inject([AdminmenuService], (service: AdminmenuService) => {
    expect(service).toBeTruthy();
  }));
});
