import { TestBed } from '@angular/core/testing';

import { DataDBService } from './data-db.service';

describe('DataDBService', () => {
  let service: DataDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
