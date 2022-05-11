export interface Invoice {
    InvoiceID: number,
    CustomerID: number,
    SupplierID: number,
    Date: Date,
    DueDate: Date,
    StatusID: number,
    GasAmount: number,
    ElectricityType: number,
    price: number,
    Tax: number,
    startDate: Date, //?
    endDate: Date, //?
}
