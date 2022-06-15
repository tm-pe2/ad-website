import { Address } from "../interfaces/customer";

export interface Planning {
    id: number,
    contract_id: number,
    user_id?: number,
    date: Date,
    status: PlanningStatus,
    address: Address,
}

export enum PlanningStatus {
    SCHEDULED = 1,
    DONE = 2,
}