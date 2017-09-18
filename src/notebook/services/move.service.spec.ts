import { TestBed, inject } from '@angular/core/testing';

import { MoveService } from './move.service';

describe('MoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveService]
    });
  });

  it('should be created', inject([MoveService], (service: MoveService) => {
    expect(service).toBeTruthy();
  }));
});
