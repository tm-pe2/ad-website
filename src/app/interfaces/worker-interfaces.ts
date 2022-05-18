// Interfaces
export interface Planning 
{
  PlanningID: number,
  EmployeeID: number,
  CustomerID: number,
  Date: Date,
  Status: number

}

export interface CustomerContracts
{
  customerID: number,
  contractID: number

}

export interface WorkerlistItem
{
  planningID: number,
  contractID: number,
  planningStatus: number,
  customerName: string,
  address: string,
  meters: WorkerlistMeter[]

}

export interface WorkerlistMeter
{
  meter_id: number,
  meter_type: string,
  physical_id: number,
  lastValue: number

}