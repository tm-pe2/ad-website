import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SupportService } from './support.service';

describe('SupportService', () => {
  let service: SupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
