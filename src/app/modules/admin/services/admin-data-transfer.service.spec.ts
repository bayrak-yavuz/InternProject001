import { TestBed } from '@angular/core/testing';

import { AdminDataTransferService } from './admin-data-transfer.service';

describe('AdminDataTransferService', () => {
  let service: AdminDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
