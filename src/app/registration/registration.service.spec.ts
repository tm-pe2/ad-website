import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import {RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule]
    });
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
