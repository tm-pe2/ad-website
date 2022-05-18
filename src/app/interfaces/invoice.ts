export interface Invoice {
    contract_id: number,
    creation_date: Date,
    due_date: Date,
    invoice_id: number,
    supplier_id: number,
    status_id: InvoiceStatus,
    Price: number,
    Tax: number,
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
