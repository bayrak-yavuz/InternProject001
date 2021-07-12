import { TestBed } from '@angular/core/testing';

import { WebsiteDataTransferService } from './website-data-transfer.service';

describe('WebsiteDataTransferService', () => {
  let service: WebsiteDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
