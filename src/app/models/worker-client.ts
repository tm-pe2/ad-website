import { Address } from "../interfaces/address";
import { Meter } from "../interfaces/customer";
import { PlanningStatus } from "./planning";

export class WorkerClient
{
    planningID?: number;
    contractID?: number;
    planningStatus?: PlanningStatus;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: Address;
    meters?: Meter[];

}