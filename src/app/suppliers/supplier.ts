import { Address } from '../interfaces/address';

export class Supplier{
    constructor(
        public SupplierID: number,
        public SupplierName: string,
        public Address: Address,
        public SupplierType: string
        ){}
    }