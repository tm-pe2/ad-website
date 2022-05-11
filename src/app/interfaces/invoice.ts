export interface Invoice {
    InvoiceID: number,
    CustomerID: number,
    SupplierID: number,
    Date: Date,
    DueDate: Date,
    Statusid: InvoiceStatus,
    GasAmount: number,
    ElectricityType: number,
    Price: number,
    Tax: number,
    StartDate: Date, //?
    EndDate: Date, //?
}

//move to db table?
export enum InvoiceStatus {
    sent,
    paid,
    overdue,
    void,
    writeOff,
    draft 
 }
