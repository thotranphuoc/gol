import { TestBed } from '@angular/core/testing';

import { GolService } from './gol.service';

describe('GolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GolService = TestBed.get(GolService);
    expect(service).toBeTruthy();
  });
});
