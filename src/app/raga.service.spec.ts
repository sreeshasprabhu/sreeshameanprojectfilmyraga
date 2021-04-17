import { TestBed } from '@angular/core/testing';

import { RagaService } from './raga.service';

describe('RagaService', () => {
  let service: RagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
