import { TestBed } from '@angular/core/testing';

import { WorkerAppService } from './worker-app.service';

describe('MobileAppDataService', () => {
  let service: WorkerAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
