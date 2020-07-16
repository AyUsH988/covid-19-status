import { TestBed, inject } from '@angular/core/testing';

import { CustomhttpServiceService } from './customhttp-service.service';

describe('CustomhttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomhttpServiceService]
    });
  });

  it('should be created', inject([CustomhttpServiceService], (service: CustomhttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
