import { TestBed } from "@angular/core/testing";
import { SupplierService } from './supplier.service';

describe('SupplierService', () => {
    let supService: SupplierService;

    beforeEach(() => {
    TestBed.configureTestingModule({});
    supService = TestBed.inject(SupplierService);
  });

  it('has Been created', () => {
    expect(supService).toBeTruthy();
  });

})